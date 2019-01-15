var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'test/e2e/reports/cucumber.json',
        output: 'test/e2e/reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
    };

    reporter.generate(options);
