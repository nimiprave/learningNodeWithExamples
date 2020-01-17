	handleFolderPropertieEditPress: function () {
			this._toggleEdit(true);
			var folderName = this.byId("namefolderProptxtId").getText();
			this.byId("changeFolderInputId").setValue(folderName);
		},
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
		handleSaveFolderPropertiePress: function () {
			var tmpModel = this.getOwnerComponent().getModel();
			var currentNodeUUID = this.getView().getModel("folderLinks").getProperty("/currentNodeUUID");
			var sPath = "/Folders(guid'" + currentNodeUUID + "')";
			var folderName = this.byId("changeFolderInputId").getValue();
			var payload = {
				"MktgOrganizerNodeName": folderName
			};
			tmpModel.update(sPath, payload, {
				async: false,
				success: function (oData) {
					this._toggleEdit(false);
					this.byId("namefolderProptxtId").setText(folderName);
					this.getView().getModel("folderLinks").setProperty("/currentLocationText", folderName);
					// this._clearBreadCrumbAfter();
				}.bind(this),
				error: function (error) {
					jQuery.sap.log.error("hpa.cei.mkt.organizer :unable to change folder properties");
				}
			});
		},
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
		handleFolderPropertieCancelPress: function () {
			this._toggleEdit(false);
			var folderName = this.byId("namefolderProptxtId").getText();
			this.byId("changeFolderInputId").setValue(folderName);
		},

            		onNavToFolderProperties: function (oEvent) {
			// handle the function import call to fill the folder properties tab. 
			
			var oNavCon = this.getView().byId("navConMktOrg");
			var oCurrObjPage = this.getView().byId("folderPropsPageId");
			oNavCon.to(oCurrObjPage, "show");
			var MktgOrganizerNodeUUID = this.getView().getModel("folderLinks").getProperty("/currentNodeUUID");

			//set the UI back initial
			this._toggleEdit(false);
			//this.getModel("folderListModel").setProperty("MktgOrganizerNodeNameOld", undefined);

			oCurrObjPage.unbindElement();
			oCurrObjPage.bindElement({
				path: "/AllContent(guid'" + MktgOrganizerNodeUUID + "')",
				model: "folderListModel"
			});
		},
            
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

		onNavToFolderProperties: function (oEvent) {
			// handle the function import call to fill the folder properties tab. 
			
			var oNavCon = this.getView().byId("navConMktOrg");
			var oCurrObjPage = this.getView().byId("folderPropsPageId");
			oNavCon.to(oCurrObjPage, "show");
			var MktgOrganizerNodeUUID = this.getView().getModel("folderLinks").getProperty("/currentNodeUUID");

			//set the UI back initial
			this._toggleEdit(false);
			//this.getModel("folderListModel").setProperty("MktgOrganizerNodeNameOld", undefined);

			oCurrObjPage.unbindElement();
			oCurrObjPage.bindElement({
				path: "/AllContent(guid'" + MktgOrganizerNodeUUID + "')",
				model: "folderListModel"
			});
		},
            
            
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""


		<m:Page title="{i18n>folderproperties}" id="folderPropsPageId" class="sapUiContentPadding" showNavButton="true" navButtonPress="onNavBack">
				<f:SimpleForm id="folderPropertieFormId" editable="true" layout="ResponsiveGridLayout" labelSpanXL="3" labelSpanL="3" labelSpanM="3"
					labelSpanS="12" adjustLabelSpan="false" emptySpanXL="4" emptySpanL="4" emptySpanM="4" emptySpanS="0" columnsXL="1" columnsL="1" columnsM="1"
					singleContainerFullSize="true" ariaLabelledBy="TitlePropId">
					<f:toolbar>
						<m:Toolbar id="TB1">
							<m:Title id="TitlePropId" text="{i18n>folderDetails}" level="H4" titleStyle="H4"/>
							<m:ToolbarSpacer/>
							<m:Button id="folderPropertieEdit" icon="sap-icon://edit" tooltip="{i18n>edit}" enabled="true" press="handleFolderPropertieEditPress"/>
							<m:Button id="folderPropertieSave" text="{i18n>save}" visible="false" press="handleSaveFolderPropertiePress"/>
							<m:Button id="folderPropertieCancel" text="{i18n>cancel}" visible="false" press="handleFolderPropertieCancelPress"/>
						</m:Toolbar>
					</f:toolbar>
					<f:content>
						<m:Label id="namefolderPropId" text="{i18n>name}" labelFor="namefolderProptxtId"/>
						<m:Text id="namefolderProptxtId" text="{folderListModel>MktgOrganizerNodeName}"/>
						<m:Label id="namefolderchangeId" text="{i18n>name}" required="true" labelFor="changeFolderInputId" visible="false"/>
						<m:Input id="changeFolderInputId" visible="false"
							value="{path:'folderListModel>MktgOrganizerNodeName' , type:'sap.ui.model.type.String' , constraints:{ minLength:1, maxLength:255 }}"
							maxLength="255" valueLiveUpdate="true" liveChange="validateFolderPropertyEntry"/>
						<m:Label id="createdfolderPropId" text="{i18n>created}" labelFor="createdfolderDateId"/>
						<m:Text id="createdfolderDateId"
							text="{ path: 'folderListModel>CreationDateTime', type: 'sap.ui.model.type.Date', formatOptions: { relative: true, relativeScale: 'auto' } }"/>
						<m:Label id="changedfolderPropId" text="{i18n>changed}" labelFor="changedfolderDateId"/>
						<m:Text id="changedfolderDateId"
							text="{ path: 'folderListModel>LastChangeDateTime', type: 'sap.ui.model.type.Date', formatOptions: { relative: true, relativeScale: 'auto' } }"/>
					</f:content>
				</f:SimpleForm>
				<m:footer>
					<m:Toolbar id="folderPropertiesBarId">
						<m:ToolbarSpacer id="folderPropeeP2Id"/>
						<m:Button id="folderPropeBtnId" text="{i18n>close}" press="handleClosePress"/></m:Toolbar>
				</m:footer>
			</m:Page>


