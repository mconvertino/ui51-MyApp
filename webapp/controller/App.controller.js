sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"opensap/myapp/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, MessageToast, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("opensap.myapp.controller.App", {

		formatter: formatter,

		onShowHello: function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		},
		onFilterProducts: function (oEvent) {
			// build filter array
			var aFilter = [];
			// fetch event parameter
			var sQuery = oEvent.getParameter("query");
			// retrieve list control
			var oList = this.getView().byId("productsList");
			// get binding for aggregation 'items'
			var oBinding = oList.getBinding("items");

			if (sQuery) {
				aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
			}
			// apply filter. an empty filter array will show all items
			oBinding.filter(aFilter);
		},
		onItemSelected: function (oEvent) {
			var oSelectedItem = oEvent.getParameter("listItem");
			var oContext = oSelectedItem.getBindingContext();
			var sPath = oContext.getPath();
			var oPanel = this.byId("productDetailsPanel");
			oPanel.bindElement({
				path: sPath
			});

			oPanel.setVisible(true);
		}
	});
});