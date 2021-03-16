sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict"; // Uso privado

	return {

		createRecipient: function () {
			var oData = {
				recipient: {
					name: "World"
				}
			};
			return new JSONModel(oData);
		}
	};
});