const serverRootUrl = "http://104.198.239.76:8081";
export const environment = {
  production: false,
  hmr: false,
  version: "0.0.1-dev",
  clientUrl: "http://uetsurvey.xyz",
  serverRootUrl: serverRootUrl,
  serverAdminUrl: serverRootUrl + "/api/v1/admin",
  serverDefaultUrl: serverRootUrl + "/api/v1/default",
  serverPublishUrl: serverRootUrl + "/api/v1/publish",
  serverRealTimeUrl: serverRootUrl + "/api/v1/realtime",
  defaultLanguage: "en-US",
  supportedLanguages: ["en-US", "fr-FR", "vi-VN", "zh-CN"],
  dbTable: [
    "cities",
    "countries",
    "role_grants",
    "roles",
    "states",
    "survey_collectors",
    "survey_folders",
    "survey_forms",
    "survey_recipients",
    "survey_responses",
    "survey_sends",
    "user_grants",
    "users"
  ],
  jobRole: [
    { value: "jf_acct_finance", viewValue: "Accounting/Finance" },
    { value: "jf_admin", viewValue: "Administration" },
    { value: "jf_ad_marketing", viewValue: "Advertising/Marketing" },
    { value: "jf_art", viewValue: "Art/Creative/Design" },
    { value: "jf_biz_strategy", viewValue: "Business/Strategy" },
    { value: "jf_consulting", viewValue: "Consulting" },
    { value: "jf_cust_service", viewValue: "Customer Service" },
    { value: "jf_educator", viewValue: "Educator/Instructor" },
    { value: "jf_engr", viewValue: "Engineering" },
    { value: "jf_heathcare", viewValue: "Healthcare Provider" },
    { value: "jf_human_resources", viewValue: "Human Resources" },
    { value: "jf_it", viewValue: "IT" },
    { value: "jf_legal", viewValue: "Legal/Compliance" },
    { value: "jf_management", viewValue: "Management" },
    { value: "jf_owner", viewValue: "Owner" },
    { value: "jf_product", viewValue: "Product Management/Project Management" },
    { value: "jf_pr", viewValue: "Public Relations/Communications" },
    { value: "jf_research", viewValue: "Research/Analytics" },
    { value: "jf_sales", viewValue: "Sales" },
    { value: "jf_student", viewValue: "Student" },
    { value: "jf_na", viewValue: "Not Applicable" }
  ],
  jobLevel: [
    { value: "jl_intern", viewValue: "Intern" },
    { value: "jl_ic", viewValue: "Individual Contributor" },
    { value: "jl_mgr", viewValue: "Manager" },
    { value: "jl_director", viewValue: "Director" },
    { value: "jl_vp", viewValue: "Vice President" },
    { value: "jl_prez", viewValue: "President" },
    { value: "jl_c_level", viewValue: "C-Level" },
    { value: "jl_na", viewValue: "Not Applicable" }
  ],
  organizationType: [
    { value: "type_company", viewValue: "Company" },
    { value: "type_school", viewValue: "School" },
    { value: "type_college", viewValue: "College" },
    { value: "type_hospital", viewValue: "Hospital" },
    { value: "type_physician", viewValue: "Physician" },
    { value: "type_dentist", viewValue: "Dentist" },
    { value: "type_nonprofit", viewValue: "Non-profit" },
    { value: "type_government", viewValue: "Government" },
    { value: "type_individual", viewValue: "Individual" }
  ],
  industry: [
    { value: "industry_healthcare", viewValue: "Healthcare" },
    { value: "industry_nonprofit", viewValue: "Non-profit" },
    { value: "industry_technology", viewValue: "Technology" },
    { value: "industry_energy", viewValue: "Energy & Utilities" },
    { value: "industry_transportation", viewValue: "Transport" },
    { value: "industry_materials", viewValue: "Basic Materials" },
    { value: "industry_consumer", viewValue: "Consumer goods/services" },
    { value: "industry_finance", viewValue: "Finance" },
    { value: "industry_education", viewValue: "Education" },
    { value: "industry_government", viewValue: "Government" },
    { value: "industry_proservices", viewValue: "Professional Services" },
    { value: "industry_manufacturing", viewValue: "Manufacturing" }
  ],
  size: [
    { value: "size_1_4", viewValue: "1-4 employees" },
    { value: "size_5_9", viewValue: "5-9 employees" },
    { value: "size_10_19", viewValue: "10-19 employees" },
    { value: "size_20_99", viewValue: "20-99 employees" },
    { value: "size_100_499", viewValue: "100-499 employees" },
    { value: "size_500_999", viewValue: "500-999 employees" },
    { value: "size_1000_4999", viewValue: "1000-4999 employees" },
    { value: "size_5000_9999", viewValue: "5000-9999 employees" },
    { value: "size_10000", viewValue: "10000+ employees" }
  ],
  surveyCategory: [
    { value: 59, viewValue: "Community" },
    { value: 1, viewValue: "Customer Feedback" },
    { value: 6, viewValue: "Customer Satisfaction" },
    { value: 52, viewValue: "Demographics" },
    { value: 11, viewValue: "Education" },
    { value: 24, viewValue: "Events" },
    { value: 39, viewValue: "Healthcare" },
    { value: 28, viewValue: "Human Resources" },
    { value: 45, viewValue: "Industry Specific" },
    { value: 85, viewValue: "Just for Fun" },
    { value: 8, viewValue: "Market Research" },
    { value: 49, viewValue: "Non-Profit" },
    { value: 55, viewValue: "Political" },
    { value: 2345, viewValue: "Quiz" },
    { value: -1, viewValue: "Other" }
  ],
  languages: {
    "en-US": {
      text: "English",
      abbr: "🇬🇧"
    },
    "zh-CN": {
      text: "简体中文",
      abbr: "🇨🇳"
    },
    "vi-VN": {
      text: "VietNam",
      abbr: "🇭🇰"
    },
    "fr-FR": {
      text: "French",
      abbr: "🇫🇷"
    }
  }
};
