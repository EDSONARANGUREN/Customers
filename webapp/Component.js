sap.ui.define([
	"sap/ui/core/UIComponent",
	"LogaliUI5/Customers/model/models",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, models, ResourceModel) {

	return UIComponent.extend("LogaliUI5.Customers.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			// Call Init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// Set model on view
			this.setModel(models.createRecipient());

			// Set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "LogaliUI5.Customers.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
		}
	});
});