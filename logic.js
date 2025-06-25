<script>
    // Dynamic field hiding and show/hide logic
    document.addEventListener("DOMContentLoaded", function() {
      // Hide all dynamic fields by default
      let fieldsToHide = [
        "Inquiry Type", "Issue Type", "Inquiry Classification", "Inquiry SubClassification",
        "Issue Classification", "Contact Request Type","Dependent Identification Number"
      ];
      document.querySelectorAll(".form-group label").forEach(label => {
        fieldsToHide.forEach(field => {
          if(label.textContent.includes(field)) {
            label.parentElement.classList.add("hidden");
          }
        });
      });
      
      // Get references to key fields for dynamic show/hide
      const subjectField = document.getElementById("subjectSelect");
      const inquiryTypeField = document.getElementById("inquiryTypeSelect");
      const issueTypeField = document.getElementById("issueTypeSelect");
      const contactRequestTypeField = document.getElementById("contactRequestType");
      
      const inquiryClassification33Field = document.getElementById("inquiryClassification33Select");
      const inquiryClassification32Field = document.getElementById("inquiryClassification32Select");
      const inquiryClassification31Field = document.getElementById("inquiryClassification31Select");
      
      const inquirySubClassificationField = document.getElementById("inquirySubClassificationSelect");
      const inquirySubClassification41Field = document.getElementById("inquirySubClassification41Select");
      const inquirySubClassification42Field = document.getElementById("inquirySubClassification42Select");
      const inquirySubClassification43Field = document.getElementById("inquirySubClassification43Select");
      const inquirySubClassification44Field = document.getElementById("inquirySubClassification44Select");
      const inquirySubClassification45Field = document.getElementById("inquirySubClassification45Select");
      
      const issueClassification1Field = document.getElementById("issueClassification1Select");
      const issueClassification2Field = document.getElementById("issueClassification2Select");

      const DependentIdentificationNumberField = document.getElementById("DependentIdentificationNumberInput");
      
      // Function to handle changes to the Subject field.
      function handleSubjectChange() {
        let selectedSubject = subjectField.value;
                 
        // Show "Inquiry Type" if subject is Inquiry (value "5")
        if(selectedSubject === "5") {
          if(inquiryTypeField) {
            inquiryTypeField.closest(".form-group").classList.remove("hidden");
          }
        } else {
          if(inquiryTypeField) {
            inquiryTypeField.closest(".form-group").classList.add("hidden");
          }
        }
        
        // Show "Issue Type" if subject is Report a Problem (value "4")
        if(selectedSubject === "4") {
          if(issueTypeField) {
            issueTypeField.closest(".form-group").classList.remove("hidden");
          }
        } else {
          if(issueTypeField) {
            issueTypeField.closest(".form-group").classList.add("hidden");
          }
        }
        
        // Show "Contact Request Type" if subject is Submit a Contact Request (value "3")
        if(selectedSubject === "3") {
          if(contactRequestTypeField) {
            contactRequestTypeField.closest(".form-group").classList.remove("hidden");
          }
        } else {
          if(contactRequestTypeField) {
            contactRequestTypeField.closest(".form-group").classList.add("hidden");
          }
        }
        
        // Update dependent fields for inquiry/issue changes
        handleInquiryAndIssueChanges();
      }
      
      // Function to handle Inquiry Type and Issue Type dependent changes
      function handleInquiryAndIssueChanges() {
        if(inquiryTypeField) {
          let selectedInquiryType = inquiryTypeField.value;
          if(selectedInquiryType === "100000003") {
            // Show Inquiry Classification33
            inquiryClassification33Field && inquiryClassification33Field.closest(".form-group").classList.remove("hidden");
          } else {
            inquiryClassification33Field && inquiryClassification33Field.closest(".form-group").classList.add("hidden");
          }
          
          if(selectedInquiryType === "100000002") {
            // Show Inquiry Classification32
            inquiryClassification32Field && inquiryClassification32Field.closest(".form-group").classList.remove("hidden");
          } else {
            inquiryClassification32Field && inquiryClassification32Field.closest(".form-group").classList.add("hidden");
          }
          
          if(selectedInquiryType === "100000001") {
            // Show Inquiry Classification31
            inquiryClassification31Field && inquiryClassification31Field.closest(".form-group").classList.remove("hidden");
          } else {
            inquiryClassification31Field && inquiryClassification31Field.closest(".form-group").classList.add("hidden");
          }
        }
        
        if(issueTypeField) {
          let selectedIssueType = issueTypeField.value;
          if(selectedIssueType === "100000001") {
            issueClassification1Field && issueClassification1Field.closest(".form-group").classList.remove("hidden");
          } else {
            issueClassification1Field && issueClassification1Field.closest(".form-group").classList.add("hidden");
          }
          if(selectedIssueType === "100000000") {
            issueClassification2Field && issueClassification2Field.closest(".form-group").classList.remove("hidden");
          } else {
            issueClassification2Field && issueClassification2Field.closest(".form-group").classList.add("hidden");
          }
        }
      }
      
      // Function to handle sub-classification for Inquiry Classification32
      function handleInquiryClassification32Change() {
        if(inquiryClassification32Field && inquirySubClassificationField) {
          let selectedValue = inquiryClassification32Field.value;
          if(selectedValue === "permanent_limited_residency") {
            inquirySubClassificationField.closest(".form-group").classList.remove("hidden");
          } else {
            inquirySubClassificationField.closest(".form-group").classList.add("hidden");
          }
        }
      }
      
      // Function to handle sub-classification for Inquiry Classification31
      function handleInquiryClassification31Change() {
        if(inquiryClassification31Field) {
          let selectedValue = inquiryClassification31Field.value;
          if(inquirySubClassification41Field) {
            selectedValue === "266990003" ? inquirySubClassification41Field.closest(".form-group").classList.remove("hidden") : inquirySubClassification41Field.closest(".form-group").classList.add("hidden");
            DependentIdentificationNumberInput.closest(".form-group").classList.remove("hidden");
          }
          if(inquirySubClassification42Field) {
            selectedValue === "266990004" ? inquirySubClassification42Field.closest(".form-group").classList.remove("hidden") : inquirySubClassification42Field.closest(".form-group").classList.add("hidden");
          }
          if(inquirySubClassification43Field) {
            selectedValue === "266990005" ? inquirySubClassification43Field.closest(".form-group").classList.remove("hidden") : inquirySubClassification43Field.closest(".form-group").classList.add("hidden");
          }
          if(inquirySubClassification44Field) {
            selectedValue === "266990006" ? inquirySubClassification44Field.closest(".form-group").classList.remove("hidden") : inquirySubClassification44Field.closest(".form-group").classList.add("hidden");
          }
          if(inquirySubClassification45Field) {
            selectedValue === "266990008" ? inquirySubClassification45Field.closest(".form-group").classList.remove("hidden") : inquirySubClassification45Field.closest(".form-group").classList.add("hidden");
          }
        }
      }
      
      // Attach event listeners for dynamic fields
      if(subjectField) subjectField.addEventListener("change", handleSubjectChange);
      if(inquiryTypeField) inquiryTypeField.addEventListener("change", handleInquiryAndIssueChanges);
      if(issueTypeField) issueTypeField.addEventListener("change", handleInquiryAndIssueChanges);
      if(inquiryClassification32Field) inquiryClassification32Field.addEventListener("change", handleInquiryClassification32Change);
      if(inquiryClassification31Field) inquiryClassification31Field.addEventListener("change", handleInquiryClassification31Change);
      
      // Initialize on load based on current field values
      handleSubjectChange();
      
      fetchLookupData("team", "teamid", "relatedToSelect", "name");
      
      const XrmContext = window.parent.Xrm || Xrm;
      if (XrmContext && XrmContext.WebApi) {
        fetchCustomerLookup();
      } else {
        console.warn("Xrm is not available. This script must be executed inside a Dynamics 365 form.");
      }
      
      setTimeout(function() {
        loadTimeline();
        loadCustomData();
      }, 3000);
      
      // --- Field Sync for OOB Mapping ---
      // Sync Inquiry Type to new_inquirytype
      var inquiryTypeSelect = document.getElementById("inquiryTypeSelect");
      if(inquiryTypeSelect) {
        inquiryTypeSelect.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("new_inquirytype").setValue(parseInt(val));
          }
        });
      }
      
      // Sync Issue Type to new_issuetype
      var issueTypeSelect = document.getElementById("issueTypeSelect");
      if(issueTypeSelect) {
        issueTypeSelect.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("new_issuetype").setValue(parseInt(val));
          }
        });
      }
      
      // Sync Contact Request Type to nw_contactrequesttype
      var contactRequestSelect = document.getElementById("contactRequestType");
      if(contactRequestSelect) {
        contactRequestSelect.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("nw_contactrequesttype").setValue(parseInt(val));
          }
        });
      }
      
      // Sync Issue Classification2 to nw_issueclassification2
      var issueClassification2Select = document.getElementById("issueClassification2Select");
      if(issueClassification2Select) {
        issueClassification2Select.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("nw_issueclassification2").setValue(parseInt(val));
          }
        });
      }
      
      // Sync Issue Classification1 to nw_issueclassification1
      var issueClassification1Select = document.getElementById("issueClassification1Select");
      if(issueClassification1Select) {
        issueClassification1Select.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("nw_issueclassification1").setValue(parseInt(val));
          }
        });
      }
      
      // Sync Inquiry Classification31 to nw_inquirylevel31
      var inquiryClassification31Select = document.getElementById("inquiryClassification31Select");
      if(inquiryClassification31Select) {
        inquiryClassification31Select.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("nw_inquirylevel31").setValue(parseInt(val));
          }
        });
      }
      
      // Sync Inquiry Classification32 to nw_inquirylevel32
      var inquiryClassification32Select = document.getElementById("inquiryClassification32Select");
      if(inquiryClassification32Select) {
        inquiryClassification32Select.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("nw_inquirylevel32").setValue(parseInt(val));
          }
        });
      }
      
      // Sync Inquiry Classification33 to nw_inquirylevel33
      var inquiryClassification33Select = document.getElementById("inquiryClassification33Select");
      if(inquiryClassification33Select) {
        inquiryClassification33Select.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("nw_inquirylevel33").setValue(parseInt(val));
          }
        });
      }
      
      // Sync Inquiry Subclassification41 to nw_inquirylevel41
      var inquirySubClassification41 = document.getElementById("inquirySubClassification41Select");
      if(inquirySubClassification41) {
        inquirySubClassification41.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("nw_inquirylevel41").setValue(parseInt(val));
          }
        });
      }
      
      // Sync Inquiry Subclassification42 to nw_inquirylevel42
      var inquirySubClassification42 = document.getElementById("inquirySubClassification42Select");
      if(inquirySubClassification42) {
        inquirySubClassification42.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("nw_inquirylevel42").setValue(parseInt(val));
          }
        });
      }
      
      // Sync Inquiry Subclassification44 to nw_inquirylevel44
      var inquirySubClassification44 = document.getElementById("inquirySubClassification44Select");
      if(inquirySubClassification44) {
        inquirySubClassification44.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("nw_inquirylevel44").setValue(parseInt(val));
          }
        });
      }
      
      // Sync Inquiry Subclassification43 to nw_inquirylevel43
      var inquirySubClassification43 = document.getElementById("inquirySubClassification43Select");
      if(inquirySubClassification43) {
        inquirySubClassification43.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("nw_inquirylevel43").setValue(parseInt(val));
          }
        });
      }
      
      // Sync Inquiry Subclassification45 to nw_inquirylevel45
      var inquirySubClassification45 = document.getElementById("inquirySubClassification45Select");
      if(inquirySubClassification45) {
        inquirySubClassification45.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("nw_inquirylevel45").setValue(parseInt(val));
          }
        });
      }
      
      // --- Existing Field Sync for Other Fields ---
      // Sync Residency Type to new_beneficiarytype
      var residencyTypeSelect = document.getElementById("residencyTypeSelect");
      if(residencyTypeSelect) {
        residencyTypeSelect.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("new_beneficiarytype").setValue(parseInt(val));
          }
        });
      }
      
      // Sync Origin to caseorigincode
      var originSelect = document.getElementById("originSelect");
      if(originSelect) {
        originSelect.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("caseorigincode").setValue(parseInt(val));
          }
        });
      }
      
      // Sync Subject to new_subjectoptionset
      var subjectSelect = document.getElementById("subjectSelect");
      if(subjectSelect) {
        subjectSelect.addEventListener("change", function(){
          var val = this.value;
          console.log("Subject changed, value:", val);
          var formAttribute = (window.parent.Xrm && window.parent.Xrm.Page) ? window.parent.Xrm.Page.getAttribute("new_subjectoptionset") : null;
          if(formAttribute) {
            var numericVal = parseInt(val);
            if(isNaN(numericVal)) {
              console.error("Parsed subject value is NaN. Check the option values.");
            } else {
              formAttribute.setValue(numericVal);
              console.log("Updated new_subjectoptionset to", numericVal);
            }
          } else {
            console.error("Attribute 'new_subjectoptionset' not found on the parent form.");
          }
        });
      } else {
        console.error("Subject select element not found.");
      }
      
      // Sync Priority to prioritycode
      var prioritySelect = document.getElementById("prioritySelect");
      if(prioritySelect) {
        prioritySelect.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("prioritycode").setValue(parseInt(val));
          }
        });
      }
      
      // Sync Description to description
      var descriptionInput = document.getElementById("descriptionInput");
      if(descriptionInput) {
        descriptionInput.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("description").setValue(val);
          }
        });
      }
      var DependentIdentificationNumberInput = document.getElementById("DependentIdentificationNumberInput");
      if(DependentIdentificationNumberInput) {
        DependentIdentificationNumberInput.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("ntw_dependentidentificationnumber").setValue(val);
          }
        });
      }

      var LastCommentInput = document.getElementById("LastCommentInput");
      if(LastCommentInput) {
        LastCommentInput.addEventListener("change", function(){
          var val = this.value;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("ntwapp_lastcomment").setValue(val);
          }
        });
      }
      
      // Sync Related To lookup field to ntw_relatedto
      var relatedToSelect = document.getElementById("relatedToSelect");
      if(relatedToSelect) {
        relatedToSelect.addEventListener("change", function(){
          var val = this.value;
          var text = this.options[this.selectedIndex].text;
          if(window.parent.Xrm && window.parent.Xrm.Page){
            window.parent.Xrm.Page.getAttribute("ntw_relatedto").setValue([{ id: val, name: text, entityType: "team" }]);
          }
        });
      }
    });
    
    // --- Updated Xrm API Sync for Lookups ---
    function selectCustomer(entityName, entityId, displayName) {
      document.getElementById("customerLookup").value = displayName;
      document.getElementById("customerResults").style.display = "none";
      if(window.parent.Xrm && window.parent.Xrm.Page) {
        window.parent.Xrm.Page.getAttribute("customerid").setValue([{ id: entityId, name: displayName, entityType: entityName }]);
      }
      fetchCustomerDetails(entityName, entityId);
    }
    
    function selectKBA(knowledgearticleid, title) {
      document.getElementById("kbaLookup").value = title;
      document.getElementById("kbaResults").style.display = "none";
      if(window.parent.Xrm && window.parent.Xrm.Page) {
        window.parent.Xrm.Page.getAttribute("nw_relatedkba").setValue([{ id: knowledgearticleid, name: title, entityType: "knowledgearticle" }]);
      }
      fetchKBAContent(knowledgearticleid);
    }
    
    // --- loadCustomData: Retrieve data from OOB fields and populate HTML controls ---
    function loadCustomData() {
      if(window.parent.Xrm && window.parent.Xrm.Page) {
        function getAtt(fieldName) {
          var attr = window.parent.Xrm.Page.getAttribute(fieldName);
          console.log("Attribute", fieldName, "value:", attr ? attr.getValue() : null);
          return attr ? attr.getValue() : null;
        }
        // Residency Number
        var residNum = getAtt("ntw_residencynumber");
        if(residNum !== null) {
          document.getElementById("residencyNumberInput").value = residNum;
        }
        var DependentIdent = getAtt("ntw_dependentidentificationnumber");
        if(DependentIdent !== null) {
          setFieldValueAndShow("DependentIdentificationNumberInput",DependentIdent);
        }
        // Last Comment
        var lstcmt = getAtt("ntwapp_lastcomment");
        if(lstcmt !== null) {
          document.getElementById("LastCommentInput").value = lstcmt;
        }
        // Case Code
        var caseCode = getAtt("new_casecode");
        if(caseCode !== null) {
          document.getElementById("caseCodeInput").value = caseCode;
        }
        // Residency Type
        var residType = getAtt("new_beneficiarytype");
        if(residType !== null) {
          document.getElementById("residencyTypeSelect").value = residType;
        }
        // Origin
        var origin = getAtt("caseorigincode");
        if(origin !== null) {
          document.getElementById("originSelect").value = origin;
        }
        // Subject
        var subject = getAtt("new_subjectoptionset");
        if(subject !== null) {
          document.getElementById("subjectSelect").value = subject;
        }
        // Priority
        var priority = getAtt("prioritycode");
        if(priority !== null) {
          document.getElementById("prioritySelect").value = priority;
        }
        // Description
        var desc = getAtt("description");
        if(desc !== null) {
          document.getElementById("descriptionInput").value = desc;
        }
        // Related To lookup (ntw_relatedto)
        var relatedTo = getAtt("ntw_relatedto");
        if(relatedTo && relatedTo.length > 0) {
          document.getElementById("relatedToSelect").value = relatedTo[0].id;
        }
        // Related KBA lookup (nw_relatedkba)
        var relatedKBA = getAtt("nw_relatedkba");
        if(relatedKBA && relatedKBA.length > 0) {
          document.getElementById("kbaLookup").value = relatedKBA[0].name;
          fetchKBAContent(relatedKBA[0].id);
        }
        // Customer lookup (customerid)
        var customer = getAtt("customerid");
        if(customer && customer.length > 0) {
          document.getElementById("customerLookup").value = customer[0].name;
          fetchCustomerDetails(customer[0].entityType, customer[0].id);
        }
        // Inquiry Type
        var inqType = getAtt("new_inquirytype");
        if(inqType !== null) {
          setFieldValueAndShow("inquiryTypeSelect", inqType);
      }
        // Issue Type
        var issType = getAtt("new_issuetype");
        if(issType !== null) {
          setFieldValueAndShow("issueTypeSelect",issType);
        }
        // Contact Request Type
        var contactReq = getAtt("nw_contactrequesttype");
        if(contactReq !== null) {
          setFieldValueAndShow("contactRequestType",contactReq);
        }
        // Issue Classification2
        var issClass2 = getAtt("nw_issueclassification2");
        if(issClass2 !== null) {
          setFieldValueAndShow("issueClassification2Select",issClass2);
        }
        // Issue Classification1
        var issClass1 = getAtt("nw_issueclassification1");
        if(issClass1 !== null) {
          setFieldValueAndShow("issueClassification1Select",issClass1);
        }
        // Inquiry Classification31
        var inqClass31 = getAtt("nw_inquirylevel31");
        if(inqClass31 !== null) {
          setFieldValueAndShow("inquiryClassification31Select",inqClass31);
        }
        // Inquiry Classification32
        var inqClass32 = getAtt("nw_inquirylevel32");
        if(inqClass32 !== null) {
          setFieldValueAndShow("inquiryClassification32Select",inqClass32);
        }
        // Inquiry Classification33
        var inqClass33 = getAtt("nw_inquirylevel33");
        if(inqClass33 !== null) {
          setFieldValueAndShow("inquiryClassification33Select",inqClass33);
        }
        // Inquiry Subclassification41
        var inqSub41 = getAtt("nw_inquirylevel41");
        if(inqSub41 !== null) {
          setFieldValueAndShow("inquirySubClassification41Select",inqSub41);
        }
        // Inquiry Subclassification42
        var inqSub42 = getAtt("nw_inquirylevel42");
        if(inqSub42 !== null) {
          setFieldValueAndShow("inquirySubClassification42Select",inqSub42);
        }
        // Inquiry Subclassification44
        var inqSub44 = getAtt("nw_inquirylevel44");
        if(inqSub44 !== null) {
          setFieldValueAndShow("inquirySubClassification44Select",inqSub44);
        }
        // Inquiry Subclassification43
        var inqSub43 = getAtt("nw_inquirylevel43");
        if(inqSub43 !== null) {
          setFieldValueAndShow("inquirySubClassification43Select",inqSub43);
        }
        // Inquiry Subclassification45
        var inqSub45 = getAtt("nw_inquirylevel45");
        if(inqSub45 !== null) {
          setFieldValueAndShow("inquirySubClassification45Select",inqSub45);
        }
      } else {
        console.error("Xrm or Xrm.Page not available.");
      }
    }
    function setFieldValueAndShow(fieldId, value) {
var field = document.getElementById(fieldId);
if (field) {
  field.value = value.toString();
  field.closest(".form-group").classList.remove("hidden");
}
}

    
    // --- Updated Xrm API Sync for Lookups ---
    function selectCustomer(entityName, entityId, displayName) {
      document.getElementById("customerLookup").value = displayName;
      document.getElementById("customerResults").style.display = "none";
      if(window.parent.Xrm && window.parent.Xrm.Page) {
        window.parent.Xrm.Page.getAttribute("customerid").setValue([{ id: entityId, name: displayName, entityType: entityName }]);
      }
      fetchCustomerDetails(entityName, entityId);
    }
    
    function selectKBA(knowledgearticleid, title) {
      document.getElementById("kbaLookup").value = title;
      document.getElementById("kbaResults").style.display = "none";
      if(window.parent.Xrm && window.parent.Xrm.Page) {
        window.parent.Xrm.Page.getAttribute("nw_relatedkba").setValue([{ id: knowledgearticleid, name: title, entityType: "knowledgearticle" }]);
      }
      fetchKBAContent(knowledgearticleid);
    }
    
    // --- Existing functions remain below ---
    
    function fetchCustomerDetails(entityName, recordId) {
      let contactDetails = document.getElementById("contactDetails");
      if (!recordId) {
        contactDetails.style.display = "none";
        return;
      }
      
      const XrmContext = window.parent.Xrm || Xrm;
      if (!XrmContext || !XrmContext.WebApi) {
        console.error("Xrm.WebApi is not available.");
        return;
      }
      
      let selectFields = "?$select=firstname,lastname,emailaddress1,mobilephone,new_genderglobaloptionset,new_residencynumber,new_requestnumber,new_customertype";
      
      XrmContext.WebApi.retrieveRecord("contact", recordId, selectFields)
        .then(function (response) {
          document.getElementById("contactFirstName").textContent = response.firstname || "-";
          document.getElementById("contactLastName").textContent = response.lastname || response.fullname || "-";
          document.getElementById("contactRequestNumber").textContent = response.new_requestnumber || "-";
          let customerTypeMap = {
            2: "متقدم",
            3: "مقيم مميز",
            4: "مرشح",
            5: "جهة حكومية أو خاصة",
            6: "مهتم بالاقامة المميزة",
            100000000: "مسجل في المنصة",
            100000001: "دائمة",
            100000002: "محددة"
          };
          document.getElementById("contactCustomerType").textContent = customerTypeMap[response.new_customertype] || "Unknown";
          document.getElementById("contactResidencyNumber").textContent = response.new_residencynumber || "-";
          let genderMap = { 1: "Male", 2: "Female", 3: "Other" };
          document.getElementById("contactGender").textContent = genderMap[response.new_genderglobaloptionset] || "-";
          document.getElementById("contactEmail").textContent = response.emailaddress1 || "-";
          document.getElementById("contactPhone").textContent = response.mobilephone || "-";
          
          contactDetails.style.display = "block";
        })
        .catch(function (error) {
          console.error("Error retrieving customer details:", error.message);
        });
    }
    
    function searchCustomer(query) {
console.log("Searching for Contact & Account:", query);
if (!query || query.length < 2) {
  document.getElementById("customerResults").style.display = "none";
  document.getElementById("customerResults").innerHTML = "";
  return;
}

const XrmContext = window.parent.Xrm || Xrm;
if (!XrmContext || !XrmContext.WebApi) {
  console.error("Xrm.WebApi is not available.");
  return;
}

let contactQuery = `?$select=contactid,fullname,new_residencynumber&$filter=contains(fullname,'${query}') or contains(new_residencynumber,'${query}')&$top=5`;
let accountQuery = `?$select=accountid,name,accountnumber&$filter=contains(name,'${query}') or contains(accountnumber,'${query}')&$top=5`;

Promise.all([
  XrmContext.WebApi.retrieveMultipleRecords("contact", contactQuery),
  XrmContext.WebApi.retrieveMultipleRecords("account", accountQuery)
]).then(([contactsResult, accountsResult]) => {
  let resultsContainer = document.getElementById("customerResults");
  resultsContainer.innerHTML = "";

  // Add contact results
  contactsResult.entities.forEach(con => {
    let displayResidency = con.new_residencynumber ? ` - ${con.new_residencynumber}` : "";
    let option = document.createElement("div");
    option.textContent = `[Contact] ${con.fullname}${displayResidency}`;
    option.onclick = () => {
      selectCustomer("contact", con.contactid, con.fullname);
    };
    resultsContainer.appendChild(option);
  });

  // Add account results
  accountsResult.entities.forEach(acc => {
    let displayAccountNum = acc.accountnumber ? ` - ${acc.accountnumber}` : "";
    let option = document.createElement("div");
    option.textContent = `[Account] ${acc.name}${displayAccountNum}`;
    option.onclick = () => {
      selectCustomer("account", acc.accountid, acc.name);
    };
    resultsContainer.appendChild(option);
  });

  resultsContainer.style.display = (contactsResult.entities.length + accountsResult.entities.length > 0) ? "block" : "none";
}).catch(function (error) {
  console.error("Error searching contacts/accounts:", error);
});
}
    
    function searchKBA(query) {
      console.log("Searching for KBA:", query);
      
      // Clear any previously displayed KB content
      let contentBox = document.getElementById("kbaContentDisplay");
      contentBox.style.display = "none";
      contentBox.innerHTML = "";
      
      if (!query || query.length < 2) {
        document.getElementById("kbaResults").style.display = "none";
        document.getElementById("kbaResults").innerHTML = "";
        return;
      }
      
      const XrmContext = window.parent.Xrm || Xrm;
      if (!XrmContext || !XrmContext.WebApi) {
        console.error("Xrm.WebApi is not available.");
        return;
      }
      
      let kbaQuery = `?$select=knowledgearticleid,title&$filter=contains(title,'${query}')&$top=5`;
      
      XrmContext.WebApi.retrieveMultipleRecords("knowledgearticle", kbaQuery)
        .then(function(response) {
          let resultsContainer = document.getElementById("kbaResults");
          resultsContainer.innerHTML = "";
          
          let kbaMap = {};
          response.entities.forEach(ka => {
            if (ka.title && !kbaMap[ka.knowledgearticleid]) {
              kbaMap[ka.knowledgearticleid] = ka;
            }
          });
          
          let uniqueEntities = Object.values(kbaMap);
          
          uniqueEntities.forEach(ka => {
            let option = document.createElement("div");
            option.textContent = `[KBA] ${ka.title}`;
            option.onclick = () => {
              selectKBA(ka.knowledgearticleid, ka.title);
            };
            resultsContainer.appendChild(option);
          });
          
          resultsContainer.style.display = uniqueEntities.length > 0 ? "block" : "none";
        })
        .catch(function (error) {
          console.error("Error searching KBA:", error);
        });
    }
    
    function fetchKBAContent(knowledgearticleid) {
      const XrmContext = window.parent.Xrm || Xrm;
      if (!XrmContext || !XrmContext.WebApi) {
        console.error("Xrm.WebApi is not available.");
        return;
      }
      XrmContext.WebApi.retrieveRecord("knowledgearticle", knowledgearticleid, "?$select=content")
        .then(function(response) {
          let content = response.content || "No content available.";
          let contentBox = document.getElementById("kbaContentDisplay");
          contentBox.innerHTML = content;
          contentBox.style.display = "block";
        })
        .catch(function(error) {
          console.error("Error retrieving KBA content:", error.message);
        });
    }
    
    function fetchLookupData(entityName, selectField, lookupFieldId, labelField) {
      const XrmContext = window.parent.Xrm || Xrm;
      if (!XrmContext || !XrmContext.WebApi) {
        console.error("Xrm.WebApi is not available.");
        return;
      }
      let lookupSelect = document.getElementById(lookupFieldId);
      lookupSelect.innerHTML = '<option value="">Select an option</option>';
      XrmContext.WebApi.retrieveMultipleRecords(entityName, `?$select=${selectField},${labelField}`)
        .then(function (response) {
          response.entities.forEach(item => {
            let option = document.createElement("option");
            option.value = item[selectField];
            option.textContent = item[labelField];
            lookupSelect.appendChild(option);
          });
        }, function (error) {
          console.error(`Error fetching ${entityName} records:`, error.message);
        });
    }
    
    function fetchCustomerLookup() {
      const XrmContext = window.parent.Xrm || Xrm;
      if (!XrmContext || !XrmContext.WebApi) {
        console.error("Xrm.WebApi is not available.");
        return;
      }
      // Optionally pre-populate the lookup field if desired.
    }
    
    function loadTimeline() {
const XrmContext = window.parent.Xrm || Xrm;
if (!XrmContext) {
  console.warn("Xrm is not available.");
  return;
}

let caseId = window.parent.Xrm.Page.data.entity.getId().replace(/[{}]/g, "");
let timelineList = document.getElementById("timelineList");
timelineList.innerHTML = "<li>Loading timeline...</li>";

// Retrieve notes (annotations) and tasks only
let fetchNotes = XrmContext.WebApi.retrieveMultipleRecords("annotation", `?$filter=_objectid_value eq '${caseId}'&$orderby=createdon desc`);
let fetchTasks = XrmContext.WebApi.retrieveMultipleRecords("task", `?$filter=_regardingobjectid_value eq '${caseId}'&$orderby=createdon desc`);

// Map for task state codes
const stateMap = {
  0: "Open",
  1: "Completed",
  2: "Canceled"
};

Promise.all([fetchNotes, fetchTasks]).then(results => {
  let timelineData = [];
  
  // Process Notes – include the annotation's ID for deletion
  results[0].entities.forEach(note => {
    timelineData.push({
      id: note.annotationid,  // Save the note's unique identifier for deletion
      date: note.createdon,
      type: "Note",
      description: note.notetext || "No description"
    });
  });
  
  // Process Tasks including status from statecode
  results[1].entities.forEach(task => {
    timelineData.push({
      date: task.createdon,
      type: "Task",
      description: task.subject || "No subject",
      status: stateMap[task.statecode] || "Unknown"
    });
  });
  
  // Sort timeline data (most recent first)
  timelineData.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Clear the timeline and add the "Add Note" section at the top
  timelineList.innerHTML = "";
  
  // Create container list item for Add Note section with enhanced styling
  let addNoteLi = document.createElement("li");
  addNoteLi.style.display = "flex";
  addNoteLi.style.justifyContent = "space-between";
  addNoteLi.style.alignItems = "center";
  addNoteLi.style.padding = "5px 10px";
  addNoteLi.style.borderBottom = "1px solid #ccc";
  addNoteLi.style.marginBottom = "10px";
  
  // Create text label element on the left with a smaller font size for flexibility
  let noteLabel = document.createElement("span");
  noteLabel.textContent = "Enter a note...";
  noteLabel.style.fontSize = "14px";
  noteLabel.style.color = "#555";
  
  // Create the Add Note button with a prettier plus icon (Unicode heavy plus sign)
  let addNoteButton = document.createElement("button");
  addNoteButton.innerHTML = "&#x2795;"; // Unicode heavy plus sign
  addNoteButton.title = "Add note";
  addNoteButton.style.fontSize = "24px";
  addNoteButton.style.cursor = "pointer";
  addNoteButton.style.border = "none";
  addNoteButton.style.backgroundColor = "#f0f0f0";
  addNoteButton.style.padding = "4px 8px";
  addNoteButton.style.borderRadius = "4px";
  
  // Add hover effects for the button
  addNoteButton.addEventListener("mouseover", function() {
    addNoteButton.style.backgroundColor = "#e0e0e0";
  });
  addNoteButton.addEventListener("mouseout", function() {
    addNoteButton.style.backgroundColor = "#f0f0f0";
  });
  
  addNoteButton.addEventListener("click", function() {
    let noteText = prompt("Enter note text:");
    if (noteText) {
      // Create a new note record (adjust the binding attribute if necessary)
      let newNote = {
        "objectid_incident@odata.bind": `/incidents(${caseId})`,
        notetext: noteText,
        subject: "New Note"
      };
      XrmContext.WebApi.createRecord("annotation", newNote).then(result => {
        alert("Note added successfully.");
        loadTimeline(); // Refresh the timeline to display the new note.
      }).catch(error => {
        console.error("Error adding note:", error);
        alert("Error adding note. Please try again.");
      });
    }
  });
  
  // Append the label and button to the container list item
  addNoteLi.appendChild(noteLabel);
  addNoteLi.appendChild(addNoteButton);
  timelineList.appendChild(addNoteLi);
  
  // Helper function to get status color based on the status text
  function getStatusColor(status) {
    if (status === "Open") {
      return "blue";
    } else if (status === "Completed") {
      return "green";
    } else {
      return "black";
    }
  }
  
  // Render timeline items
  timelineData.forEach(item => {
    let listItem = document.createElement("li");
    // Use locale string to display both date and time
    let dateTimeString = new Date(item.date).toLocaleString();
    if (item.type === "Task") {
      listItem.innerHTML = `<strong>${item.type}</strong> ${dateTimeString}<br>${item.description}<br><span style="color: ${getStatusColor(item.status)}; font-weight: bold;">${item.status}</span>`;
    } else if (item.type === "Note") {
      // Create a flex container for the note content and delete icon
      let noteContainer = document.createElement("div");
      noteContainer.style.display = "flex";
      noteContainer.style.justifyContent = "space-between";
      noteContainer.style.alignItems = "center";
      
      // Note content (with note type, date/time, and description)
      let noteContent = document.createElement("div");
      noteContent.innerHTML = `<strong>${item.type}</strong> ${dateTimeString}<br>${item.description}`;
      
      // Create the delete button with a trash can icon (Unicode)
      let deleteButton = document.createElement("button");
      deleteButton.innerHTML = "&#x1F5D1;"; // Unicode trash can icon
      deleteButton.title = "Delete note";
      deleteButton.style.border = "none";
      deleteButton.style.background = "none";
      deleteButton.style.cursor = "pointer";
      deleteButton.style.fontSize = "25px";
      deleteButton.style.color = "black";
      
      // Delete event: Confirm deletion, then remove the note via the Web API.
      deleteButton.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this note?")) {
          XrmContext.WebApi.deleteRecord("annotation", item.id).then(() => {
            alert("Note deleted successfully.");
            loadTimeline();
          }).catch(error => {
            console.error("Error deleting note:", error);
            alert("Error deleting note. Please try again.");
          });
        }
      });
      
      // Append note content and delete button to the container
      noteContainer.appendChild(noteContent);
      noteContainer.appendChild(deleteButton);
      listItem.appendChild(noteContainer);
    }
    timelineList.appendChild(listItem);
  });
}).catch(error => {
  console.error("Error fetching timeline data:", error);
  timelineList.innerHTML = "<li>Error loading timeline.</li>";
});
}
   // --- Updated Xrm API Sync for Lookups ---
    function selectCustomer(entityName, entityId, displayName) {
      document.getElementById("customerLookup").value = displayName;
      document.getElementById("customerResults").style.display = "none";
      if(window.parent.Xrm && window.parent.Xrm.Page) {
        window.parent.Xrm.Page.getAttribute("customerid").setValue([{ id: entityId, name: displayName, entityType: entityName }]);
      }
      fetchCustomerDetails(entityName, entityId);
    }
    
    function selectKBA(knowledgearticleid, title) {
      document.getElementById("kbaLookup").value = title;
      document.getElementById("kbaResults").style.display = "none";
      if(window.parent.Xrm && window.parent.Xrm.Page) {
        window.parent.Xrm.Page.getAttribute("nw_relatedkba").setValue([{ id: knowledgearticleid, name: title, entityType: "knowledgearticle" }]);
      }
      fetchKBAContent(knowledgearticleid);
    }
    
    document.addEventListener("DOMContentLoaded", function() {
      loadCustomData();
    });
  </script>
   <script>
    // Detect the user's language ID and set page attributes accordingly
    var userLcid = window.parent.Xrm.Utility.getGlobalContext().userSettings.languageId;
    if (userLcid === 1025) { // Check if Arabic
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
        
        // Translation mappings for static text elements
        var translations = {
            "Customer Information": "معلومات العميل",
            "Contact Details": "تفاصيل العميل",
            "Timeline": "الجدول الزمني",
            "Case Code": "رقم البلاغ",
            "Last Comment": "التعليق الأخير",
            "Customer": "العميل",
            "Residency Number": "رقم الإقامة",
            "Residency Type": "نوع المقيم",
            "Origin": "المصدر",
            "Subject": "الموضوع",
            "Related KBA": "المقال المعرفي",
            "Priority": "الأولوية",
            "Related to": "مرتبط بـ",
            "Description": "الوصف",
            "Inquiry Type": "نوع الاستفسار",
            "Issue Type": "نوع المشكلة",
            "Inquiry Classification33": "تصنيف الاستفسار ",
            "Inquiry Classification32": "تصنيف الاستفسار ",
            "Inquiry Classification31": "تصنيف الاستفسار ",
            "Inquiry SubClassification": "تصنيف فرعي للاستفسار",
            "Inquiry SubClassification45": "تصنيف فرعي للاستفسار",
            "Inquiry SubClassification44": "تصنيف فرعي للاستفسار",
            "Inquiry SubClassification43": "تصنيف فرعي للاستفسار",
            "Inquiry SubClassification42": "تصنيف فرعي للاستفسار",
            "Inquiry SubClassification41": "تصنيف فرعي للاستفسار",
            "Contact Request Type": "نوع طلب الاتصال",
            "Enter a note...": "أدخل ملاحظة...",
                         
            // Add more translation pairs as needed
        };

        window.addEventListener("DOMContentLoaded", function() {
            // Translate text for common elements
            var elements = document.querySelectorAll("h2, label, option, span, button");
            elements.forEach(function(el) {
                var originalText = el.textContent.trim();
                if(translations[originalText]) {
                    el.textContent = translations[originalText];
                }
            });
        });
    }
  </script>
  <script>
    // Define your translation mapping
    var optionTranslations = {
      "Inquiry": "استفسار",
      "Request": "طلب",
      "Submit a Complaint": "تقديم شكوى",
      "Submit a Suggestion": "تقديم اقتراح",
      "Submit a Contact Request": "تقديم طلب نواصل",
      "Report a Problem": "الإبلاغ عن مشكلة",
      "Main Contact": "جهة الاتصال الرئيسية",
      "Spouse": "الزوج",
      "Son": "ابن",
      "Parents": "الأهل",
      "Daughter": "بنت",
      "High": "مرتفع",
      "Normal": "متوسط",
      "Low": "منخفض",
      "Twitter": "تويتر",
      "Unified number": "هاتف",
      "Email": "بريد إلكتروني",
      "Social networking sites (Twitter)": "ويب",
      "Through an employee / official": "من خلال موظف رسمي",
      "Through the platform": "من خلال المنصة",
      "Outgoing call": "مكالمة خارجية",
      "Inquiry About Services For Premium Residency Holders": "استفسار عن خدمات حاملي الإقامة المميزة",
      "Inquiry About Special Accommodation": "استفسار عن الإقامة المميزة",
      "Inquiry About Application Procedures": "استفسار عن إجراءات الطلب",
      "Cancel the Request": "إلغاء الطلب",
      "Other": "أخرى",
      "Technical Problem with Center's Platform": "مشكلة تقنية في منصة المركز",
      "Problem Enjoying benefits as a Resident": "مشكلة في التمتع بالمزايا وهو مقيم",
      "Other": "أخرى",
      "Select an option": "تحديد"
      // Add more as needed
    };
  
    // Function to translate all option sets
    function translateOptionSets() {
      // Get all select elements in the form
      var selects = document.querySelectorAll("select");
      selects.forEach(function(select) {
        // Loop through each option in the select
        Array.from(select.options).forEach(function(option) {
          var originalText = option.textContent.trim();
          // Check if there's a translation for the current text
          if(optionTranslations[originalText]) {
            option.textContent = optionTranslations[originalText];
          }
        });
      });
    }
  
    // Run the translation function when the DOM is loaded if Arabic is detected
    window.addEventListener("DOMContentLoaded", function() {
      if(document.documentElement.lang === "ar") {
        translateOptionSets();
      }
    });
  </script>
  <script>
    var contactDetailsTranslations = {
      "First Name:": "الاسم الأول:",
      "Last Name:": "الاسم الأخير:",
      "Request Number:": "رقم الطلب:",
      "Customer Type:": "نوع العميل:",
      "Residency Number:": "رقم الإقامة:",
      "Gender:": "الجنس:",
      "Email:": "البريد الإلكتروني:",
      "Phone:": "الهاتف:"
    };
  
    function translateContactDetails() {
      var detailsSection = document.getElementById("contactDetails");
      if (detailsSection) {
        // Ensure the section uses RTL direction and right text alignment
        detailsSection.style.direction = "rtl";
        detailsSection.style.textAlign = "right";
        
        // Loop through each <strong> element to update the labels
        var strongElements = detailsSection.querySelectorAll("strong");
        strongElements.forEach(function(el) {
          var originalText = el.textContent.trim();
          if (contactDetailsTranslations[originalText]) {
            el.textContent = contactDetailsTranslations[originalText];
          }
        });
      }
    }
  
    window.addEventListener("DOMContentLoaded", function() {
      // Check if the document is set to Arabic
      if (document.documentElement.lang === "ar") {
        translateContactDetails();
      }
    });
  </script>
  <script>
    // Lock (disable) all form fields
    function lockFormFields() {
      // Targets all input, select and textarea elements
      const fields = document.querySelectorAll("input, select, textarea");
      fields.forEach(function(field) {
        field.disabled = true; // This makes the field non-editable
      });
      console.log("All form fields have been locked (read-only).");
    }
  
    // Check the record status using the Xrm object and lock fields if resolved/cancelled.
    function checkRecordStatusAndLockFields() {
      const XrmContext = window.parent.Xrm;
      if (!XrmContext || !XrmContext.Page) {
        console.warn("Xrm context is not available.");
        return;
      }
      
      // Assuming the CRM record's status is stored in the "statecode" attribute.
      const stateAttr = XrmContext.Page.getAttribute("statecode");
      if (stateAttr) {
        const status = stateAttr.getValue();
        // For example, assume:
        // 0 = Active, 1 = Resolved, 2 = Cancelled
        if (status === 1 || status === 2) {
          lockFormFields();
          console.log("Record status indicates Resolved or Cancelled; fields are now read-only.");
        }
      } else {
        console.warn("statecode attribute not found on the CRM form.");
      }
    }
  
    // Run on DOMContentLoaded along with your existing initialization logic
    document.addEventListener("DOMContentLoaded", function() {
      // Existing initialization such as loadCustomData() and loadTimeline() if needed:
      loadCustomData();
      loadTimeline();
  
      // Then check the record status and lock the fields if needed
      checkRecordStatusAndLockFields();
    });
  </script>