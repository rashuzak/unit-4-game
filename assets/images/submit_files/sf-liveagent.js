
// these constants are here because this script doesnt get transpiled.
var sfUat = {
    orgId: '00D19000000F35N'
};


var sfProd = {
    orgId: '00D410000006puJ'
};

//clear service worker cache for BCS NEXT Launch
if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations()
        .then(function (registrations) {
            for (let registration of registrations) {
                registration.unregister();
            }
        });
}


function startLiveAgentChat() {
    liveagent.startChat('57341000000HMfM')
}

function isProduction() {
    return (window.location.hostname === "bootcampspot.com" || window.location.hostname === "www.bootcampspot.com")
}

function setEnvironment() {
    let env = 'dev';
    if (isProduction()) {
        env = 'prod'
    }
    return env;
}

function initSFLiveAgent() {
    try {
        let sfWidget = document.getElementById('sf-liveagent-widget');
        liveagent.disconnect();

        window._laq = [];
        window._laq.push(function () {
            liveagent.showWhenOnline('57341000000HMfM', document.getElementById('liveagent_online'));
            liveagent.showWhenOffline('57341000000HMfM', document.getElementById('liveagent_offline'));
        });

        let environment = setEnvironment();
        let displayName = (sfWidget.getAttribute('data-username')) ? sfWidget.getAttribute('data-username') : 'No Name Available';
        let cohortName = (sfWidget.getAttribute('data-cohortname')) ? sfWidget.getAttribute('data-cohortname') : 'No Cohort Available';
        let userEmail = (sfWidget.getAttribute('data-useremail')) ? sfWidget.getAttribute('data-useremail') : 'No Email Available';

        //TEMP STATIC DATA
        //Student's Name
        liveagent.addCustomDetail('Display Name', displayName);
        //Student's Email
        liveagent.addCustomDetail('Email', userEmail);
        //Student's Cohort
        liveagent.addCustomDetail('Current Cohort', cohortName);

        liveagent.findOrCreate('Contact').map('Email', 'Email', true, true, false).map('Current_Cohort__c', 'Current Cohort', true, true, false).saveToTranscript('ContactId');
        //Link Enrollment to Chat Record
        liveagent.findOrCreate('Enrollment__c').map('Student_Email__c', 'Email', true, true, false).map('Cohort_Name__c', 'Current Cohort', true, true, false).saveToTranscript('Enrollment__c');
        //Link Account to Chat Record
        liveagent.findOrCreate('Account').map('PersonEmail', 'Email', true, true, false).map('Current_Cohort__pc', 'Current Cohort', true, true, false).saveToTranscript('Account');
        //Link Opportunity to Chat Record
        liveagent.findOrCreate('Opportunity').map('Student_Email_formula__c', 'Email', true, true, false).map('CohortName__c', 'Current Cohort', true, true, false).saveToTranscript('Opportunity__c');

        //Student Name to be displayed to Agent on loading screen
        liveagent.setName(displayName);

        /* Sets the width of the chat window to 500px */
        liveagent.setChatWindowWidth(500);

        /* Sets the height of the chat window to 500px */
        liveagent.setChatWindowHeight(500);

        if (environment === 'dev') {
            console.warn('live agent dev');
            liveagent.init("https://d.la2-c2cs-iad.salesforceliveagent.com/chat", "57241000000HJaR", sfUat.orgId);
            liveagent.enableLogging();
        }

        if (environment === 'prod') {
            console.warn('live agent prod');
            liveagent.init('https://d.la2-c1-phx.salesforceliveagent.com/chat', '57241000000HJaR', sfProd.orgId);
        }
    } catch (e) {
        console.error(e)
    }

}
