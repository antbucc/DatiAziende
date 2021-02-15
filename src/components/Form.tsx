import { Formik, Form, FieldArray, useFormikContext } from 'formik';
import InputText from './InputText';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';
import { createRef, useEffect, useState } from 'react';
import { CompanyUsers, RootObject } from '../Models';
import { CSVReader } from 'react-papaparse'

const SubmitButton = () => {
  const { values } = useFormikContext<RootObject>();
  const [result, setResult] = useState<{
    companies: unknown[];
    companyUsers: CompanyUsers[];
    employees: { name: string; surname: string; participationCode: string; headquarterCode: string; }[];
  }>({
    'companies': [],
    'companyUsers': [],
    'employees': []
  });

  useEffect(() => {
    const { companyUsers, ...rest } = values;
    setResult(state => ({
      ...state,
      'companies': [rest],
      'companyUsers': companyUsers,
    }))
  }, [values]);

  const buttonRef = createRef<CSVReader>()

  const handleOpenDialog = (e: any) => {
    if (buttonRef.current) {
      buttonRef.current?.open(e)
    }
  }

  const handleOnFileLoad = (data: any) => {
    console.log('--------------------------- here is your data')
    const employees: { name: string; surname: string; participationCode: string; headquarterCode: string; }[] = [];
    for (let index = 1; index < data.length; index++) {
      const element = data[index].data;
      const employee = {
        "name": element[0],
        "surname": element[1],
        "participationCode": element[2],
        "headquarterCode": element[3]
      }
      employees.push(employee);
    }
    setResult(state => ({
      ...state,
      employees: employees
    }))
  }

  const handleOnError = (err: any) => {
    console.log(err)
  }

  const handleOnRemoveFile = (data: any) => {
    console.log(data)
  }

  const handleRemoveFile = (e: any) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile()
    }
  }

  return (
    <>
      <CSVReader
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={handleOnError}
        noClick
        noDrag
        config={{}}
        style={{}}
        onRemoveFile={handleOnRemoveFile}
      >
        {({ file }: { file: File }) => (
          <div className="flex flex-col mt-4 border border-gray-500 rounded-md p-2">
            <button
              type='button'
              onClick={handleOpenDialog}
              className="bg-blue-500 rounded-md w-64 mt-3 text-white p-2 mx-auto cursor-pointer"
            >
              Browse file
            </button>
            <div className="bg-blue-200 rounded-md w-64 mt-3 text-white p-2 mx-auto cursor-pointer">
              {file && file.name}
            </div>
            <button
              className="bg-red-500 rounded-md w-64 mt-3 text-white p-2 mx-auto cursor-pointer"
              type="button"
              onClick={handleRemoveFile}
            >
              Remove File
            </button>
          </div>
        )}
      </CSVReader>
      <a
        className="bg-blue-500 rounded-md w-64 mt-3 text-white p-2 mx-auto"
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(result, null, 2)
        )}`}
        download="export.json"> Submit
      </a>
    </>
  )
}

const SignupForm = () => {
  const initialValue = {
    address: "Piazza del Municipio 2, Ferrara, 44121",
    campaigns: [
      "ferrara_bike2work"
    ],
    code: "comunediferrara",
    contactEmail: "urp@comune.fe.it",
    contactPhone: "+390532419111",
    enabledApps: [
      "ferraraplaygo2020"
    ],
    locations: [
      {
        "address": "Piazza del Municipio",
        "city": "Ferrara",
        "country": "Italy",
        "id": "main",
        "latitute": 44.836158,
        "longitude": 11.619019,
        "province": "Ferrara",
        "radius": 200,
        "region": "Emilia-Romagna",
        "streetNumber": "2",
        "zip": "44121"
      }
    ],
    logo: "https://www.comune.fe.it/pix/logo.png",
    name: "Comune di Ferrara",
    web: "https://www.comune.fe.it/",
    companyUsers: [
      {
        companyCode: "comunediferrara",
        name: "Admin",
        role: "ROLE_COMPANY_ADMIN",
        surname: "ComuneDiFerrara",
        username: "info@test.it",
        password: "55MFG%ff"
      }
    ],
  }

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={values => console.log(JSON.stringify(values, null, 2))}
    >
      {({ values }) => (
        <Form className="flex flex-col text-lg">
          <div className="flex flex-col mt-4 border border-gray-500 rounded-md p-2">
            <label htmlFor="address" className="font-bold">Address :</label>
            <InputText type="text" name="address" />
          </div>
          <div className="flex flex-col mt-4 border border-gray-500 rounded-md p-2">
            <label htmlFor="campaigns" className="font-bold">Campaigns</label>
            <FieldArray
              name="campaigns"
              render={(arrayHelpers) => (
                <div className="flex flex-col mt-1">
                  {values.campaigns && values.campaigns.length > 0 ? (
                    values.campaigns.map((campaign, index) => (
                      <div className="mt-4" key={index}>
                        <InputText type="text" name={`campaigns.${index}`} />
                        <RemoveButton arrayHelpers={arrayHelpers} text="Remove" index={index} />
                      </div>
                    ))
                  ) : (
                      <></>
                    )}
                  <AddButton text="Add a campaign" arrayHelpers={arrayHelpers} />
                </div>
              )}
            />
          </div>
          {
            [
              ['code', 'text'],
              ['contactEmail', 'email'],
              ['contactPhone', 'text'],
            ].map((element) => (
              <div className="flex flex-col mt-4 border border-gray-500 rounded-md p-2" key={element[0]}>
                <label htmlFor={element[0]} className="font-bold">{element[0]}</label>
                <InputText type={element[1]} name={element[0]} />
              </div>))
          }
          <div className="flex flex-col mt-4 border border-gray-500 rounded-md p-2">
            <label htmlFor="enabledApps" className="font-bold">Enabled Apps</label>
            <FieldArray
              name="enabledApps"
              render={(arrayHelpers) => (
                <div className="flex flex-col mt-1">
                  {values.enabledApps && values.enabledApps.length > 0 ? (
                    values.enabledApps.map((enabledApp, index) => (
                      <div className="mt-4" key={index}>
                        <InputText type="text" name={`enabledApps.${index}`} />
                        <RemoveButton arrayHelpers={arrayHelpers} text="Remove" index={index} />
                      </div>
                    ))
                  ) : (
                      <></>
                    )}
                  <AddButton text="Add an enabled App" arrayHelpers={arrayHelpers} />
                </div>
              )}
            />
          </div>
          <div className="flex flex-col mt-4 border border-gray-500 rounded-md p-2">
            <label htmlFor="locations" className="font-bold">Locations</label>
            <FieldArray
              name="locations"
              render={(arrayHelpers) => (
                <div className="flex flex-col mt-1">
                  {values.locations && values.locations.length > 0 ? (
                    values.locations.map((location, index) => (
                      <div className="flex flex-col mt-2 border border-gray-500 rounded-md p-2" key={index}>
                        {
                          [
                            ['address', 'text'],
                            ['city', 'text'],
                            ['country', 'text'],
                            ['id', 'text'],
                            ['latitute', 'number'],
                            ['longitude', 'number'],
                            ['province', 'text'],
                            ['radius', 'number'],
                            ['region', 'text'],
                            ['streetNumber', 'text'],
                            ['zip', 'text'],
                          ].map((element) => (
                            <div key={element[0]} className="flex flex-col p-2">
                              <label htmlFor={`locations.${index}.${element[0]}`}>{element[0]}</label>
                              <InputText type={element[1]} name={`locations.${index}.${element[0]}`} />
                            </div>
                          ))
                        }
                        <div className="w-50 px-2">
                          < RemoveButton arrayHelpers={arrayHelpers} text="Remove" index={index} />
                        </div>
                      </div>
                    ))
                  ) : (
                      <></>
                    )}
                  <AddButton text="Add a location" arrayHelpers={arrayHelpers} />
                </div>
              )}
            />
          </div>
          {
            [
              ['logo', 'text'],
              ['name', 'text'],
              ['web', 'text'],
            ].map((element) => (
              <div className="flex flex-col mt-4 border border-gray-500 rounded-md p-2" key={element[0]}>
                <label htmlFor={element[0]} className="font-bold">{element[0]}</label>
                <InputText type={element[1]} name={element[0]} />
              </div>))
          }
          <div className="flex flex-col mt-4 border border-gray-500 rounded-md p-2">
            <label htmlFor="companyUsers" className="font-bold">Company Users</label>
            <FieldArray
              name="companyUsers"
              render={(arrayHelpers) => (
                <div className="flex flex-col mt-1">
                  {values.companyUsers && values.companyUsers.length > 0 ? (
                    values.companyUsers.map((companyUser, index) => (
                      <div className="flex flex-col mt-2 border border-gray-500 rounded-md p-2" key={index}>
                        {
                          [
                            ['companyCode', 'text', 'Company Code'],
                            ['name', 'text', 'Name'],
                            ['role', 'text', 'Role'],
                            ['surname', 'text', 'Surname'],
                            ['username', 'text', 'Username'],
                            ['password', 'text', 'Password'],
                          ].map((element) => (
                            <div key={element[0]} className="flex flex-col p-2">
                              <label htmlFor={`companyUsers.${index}.${element[0]}`}>{element[2]}</label>
                              <InputText type={element[1]} name={`companyUsers.${index}.${element[0]}`} />
                            </div>
                          ))
                        }
                        <div className="w-50 px-2">
                          <RemoveButton arrayHelpers={arrayHelpers} text="Remove" index={index} />
                        </div>
                      </div>
                    ))
                  ) : (
                      <></>
                    )}
                  <AddButton text="Add a Company User" arrayHelpers={arrayHelpers} />
                </div>
              )}
            />
          </div>
          <SubmitButton />
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;