//@ui5-bundle riz/devtober/ui/adminapp/Component-preload.js
sap.ui.require.preload({
	"riz/devtober/ui/adminapp/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("riz.devtober.ui.adminapp.Component",{metadata:{manifest:"json"}})});
},
	"riz/devtober/ui/adminapp/i18n/i18n.properties":'# This is the resource bundle for riz.devtober.ui.adminapp\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Maintenance Notification\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,49.5\nflpTitle=Maintenance Notification (Custom)\n\n#XFLD,30\nflpSubtitle=manage\n',
	"riz/devtober/ui/adminapp/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"riz.devtober.ui.adminapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.0","toolsId":"64d279e5-9d10-4ab8-bec4-d9c10f448088"},"dataSources":{"mainService":{"uri":"odata/v4/admin/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"custMaintNotification-manage":{"semanticObject":"custMaintNotification","action":"manage","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.129.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"riz.devtober.ui.adminapp.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"MaintenanceItemList","target":"MaintenanceItemList"},{"pattern":"MaintenanceItem({key}):?query:","name":"MaintenanceItemObjectPage","target":"MaintenanceItemObjectPage"}],"targets":{"MaintenanceItemList":{"type":"Component","id":"MaintenanceItemList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/MaintenanceItem","variantManagement":"Page","navigation":{"MaintenanceItem":{"detail":{"route":"MaintenanceItemObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"MaintenanceItemObjectPage":{"type":"Component","id":"MaintenanceItemObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/MaintenanceItem"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"riz.app.namespace"}}'
});
//# sourceMappingURL=Component-preload.js.map
