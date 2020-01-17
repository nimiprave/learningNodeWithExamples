	_checkDsrcidFieldIsValid: function () {

			var prefix = this._getPrefixValue();
			var oInputField = sap.ui.core.Fragment.byId("addPrefilterViewDialog", "drscparamid");
			var currentValue = oInputField.getValue();
			if (currentValue.indexOf(prefix) === 0) {
				if (currentValue.length > prefix.length) {

					if (currentValue.length <= 32) {

						var re = /^Z_[a-zA-Z_0-9\-]*$/;
						if (re.test(currentValue)) {
							oInputField.setValueState("None");
						} else {
							oInputField.setValueStateText(this.getResourceBundle().getText("prefixdeleteerror"));
							oInputField.setValueState("Error");
							oInputField.setValue(prefix);
						}
					} else {
						oInputField.setValueStateText(this.getResourceBundle().getText("prefixlargesize"));
						oInputField.setValueState("Error");
						oInputField.setValue(prefix);

					}

				} else {

					oInputField.setValueStateText(this.getResourceBundle().getText("prefixempty"));
					oInputField.setValueState("Error");
					oInputField.setValue(prefix);
				}

			} else {

				oInputField.setValueStateText(this.getResourceBundle().getText("prefixdeleteerror"));
				oInputField.setValueState("Error");
				oInputField.setValue(prefix);

			}
		}



#YMSG: Error dialog description
prefixlargesize=The field size is larger than 32 characters.