sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	],
	function (Controller, MessageToast) {
		Controller.extend("opensap.myapp.controller.App", {
			onShowHello: function () {
				sap.m.MessageToast.show("Hello openSAP");
			}
		});
	});