import React, { useState } from "react";
import { Pagination, Button, Modal } from "semantic-ui-react";
import PageLayout from "../../components/layouts/PageLayout";
import CompaniesTable from "./CompaniesTable";
import { companyHooks } from "../../hooks";
import CompaniesFilter from "./CompaniesFilter";
import SaveCompany from "./SaveCompany";

const AllCompanies = () => {
  const [companyParams, setCompanyParams] = useState({
    name: "",
    code: "",
    pageSize: 10,
    pageNo: 0,
  });

  const {
    loading,
    allCompaniesResponse,
    getAllCompanies,
  } = companyHooks.useGetAllCompanies(companyParams);
  console.log(companyParams.pageNo);
  return (
    <div>
      <PageLayout
        title="All Companies"
        searchPanelTitle="Filter Companies"
        searchPanel={
          <CompaniesFilter
            companyParams={companyParams}
            setCompanyParams={setCompanyParams}
            getAllCompanies={getAllCompanies}
            loading={loading}
          />
        }
        body={
          <CompaniesTable
            loading={loading}
            allCompaniesResponse={allCompaniesResponse}
          />
        }
        primaryActions={
          <Modal
            size="mini"
            trigger={<Button color="purple">Add Company</Button>}
            header="Add company"
            content={
              <div style={{ margin: "20px" }}>
                <SaveCompany />
              </div>
            }
            actions={[
              "Cancel",
              { key: "done", content: "Add Company", positive: true },
            ]}
          />
        }
        secondaryActions={
          <Pagination
            activePage={companyParams.pageNo + 1}
            totalPages={5}
            onPageChange={
              (e, { value }) =>
                setCompanyParams({
                  ...companyParams,
                  pageNo: value,
                })
              // getAllCompanies(companyParams)
            }
          />
        }
      />
    </div>
  );
};

export default AllCompanies;
