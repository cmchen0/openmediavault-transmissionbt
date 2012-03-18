/**
 * Created by JetBrains PhpStorm.
 * User: mbeck
 * Date: 28.11.11
 * Time: 20:41
 * To change this template use File | Settings | File Templates.
 */

// require("js/omv/FormPanelExt.js")
// require("js/omv/form/plugins/FieldInfo.js")

Ext.ns("OMV.Module.Services.TransmissionBT.Admin");

/**
 * @class OMV.Module.Services.TransmissionBT.Admin.FilesAndLocationsPanel
 * @derived OMV.FormPanelExt
 */
OMV.Module.Services.TransmissionBT.Admin.FilesAndLocationsPanel = function(config) {
	var initialConfig = {
		title: "Files and Locations",
		rpcService: "TransmissionBT",
		rpcGetMethod: "getLocationsAndFiles",
		rpcSetMethod: "setLocationsAndFiles"
	};
	Ext.apply(initialConfig, config);
	OMV.Module.Services.TransmissionBT.Admin.FilesAndLocationsPanel.superclass.constructor.call(
					this, initialConfig);
};
Ext.extend(OMV.Module.Services.TransmissionBT.Admin.FilesAndLocationsPanel, OMV.FormPanelExt, {
	getFormItems : function() {
		return [{
			xtype: "fieldset",
			title: "Locations",
			defaults: {
				labelSeparator: ""
			},
			items: [{
				xtype: "fieldset",
				title: "Download",
				defaults: {
					labelSeparator: ""
				},
				items: [{
					xtype: "sharedfoldercombo",
					name: "download-sharedfolderref",
					hiddenName: "download-sharedfolderref",
					fieldLabel: "download-Shared folder",
					plugins: [ OMV.form.plugins.FieldInfo ],
					infoText: "Make sure the group 'debian-transmission' has read/write access to the shared folder."
				},{
					xtype: "textfield",
					name: "download-dir",
					fieldLabel: "Directory",
					allowBlank: true,
					plugins: [ OMV.form.plugins.FieldInfo ],
					infoText: "Directory to keep downloads. If incomplete is enabled, only complete downloads will be stored here."
				}]
			},{
				xtype: "fieldset",
				title: "Incomplete",
				defaults: {
					labelSeparator: ""
				},
				items: [{
					xtype: "checkbox",
					name: "incomplete-dir-enabled",
					fieldLabel: "Incomplete",
					checked: false,
					inputValue: 1,
					boxLabel: "Enable incomplete directory."
				},{
					xtype: "sharedfoldercombo",
					name: "incomplete-sharedfolderref",
					hiddenName: "incomplete-sharedfolderref",
					fieldLabel: "Shared folder",
					plugins: [ OMV.form.plugins.FieldInfo ],
					infoText: "Make sure the group 'debian-transmission' has read/write access to the shared folder."
				},{
					xtype: "textfield",
					name: "incomplete-dir",
					fieldLabel: "Incomplete directory",
					allowBlank: false,
					plugins: [ OMV.form.plugins.FieldInfo ],
					infoText: "Directory to keep files in until torrent is complete."
				}]
			},{
				xtype: "fieldset",
				title: "Watch",
				defaults: {
					labelSeparator: ""
				},
				items: [{
					xtype: "checkbox",
					name: "watch-dir-enabled",
					fieldLabel: "Watch",
					checked: false,
					inputValue: 1,
					boxLabel: "Enable Watch directory."
				},{
					xtype: "sharedfoldercombo",
					name: "watch-sharedfolderref",
					hiddenName: "watch-sharedfolderref",
					fieldLabel: "Shared folder",
					plugins: [ OMV.form.plugins.FieldInfo ],
					infoText: "Make sure the group 'debian-transmission' has read/write access to the shared folder."
				},{
					xtype: "textfield",
					name: "watch-dir",
					fieldLabel: "Watch directory",
					allowBlank: false,
					plugins: [ OMV.form.plugins.FieldInfo ],
					infoText: "Watch a directory for torrent files and add them to transmission"
				}]
			}]
		},{
			xtype: "fieldset",
			title: "Files",
			defaults: {
//				anchor: "100%",
				labelSeparator: ""
			},
			items: [{
				xtype: "combo",
				name: "preallocation",
				hiddenName: "preallocation",
				fieldLabel: "Preallocation",
				mode: "local",
				store: new Ext.data.SimpleStore({
					fields: [ "value","text" ],
					data: [
						[ 0,"Off" ],
						[ 1,"Fast" ],
						[ 2,"Full" ]
					]
				}),
				displayField: "text",
				valueField: "value",
				allowBlank: false,
				editable: false,
				triggerAction: "all",
				value: 1,
				plugins: [ OMV.form.plugins.FieldInfo ],
				infoText: "Mode for preallocating files."
			},{
				xtype: "checkbox",
				name: "rename-partial-files",
				fieldLabel: "Postfix",
				checked: true,
				inputValue: 1,
				boxLabel: "Postfix partially downloaded files with .part."
			},{
				xtype: "checkbox",
				name: "start-added-torrents",
				fieldLabel: "Start Torrents",
				checked: true,
				inputValue: 1,
				boxLabel: "Start torrents as soon as they are added."
			},{
				xtype: "checkbox",
				name: "trash-original-torrent-files",
				fieldLabel: "Trash original",
				checked: false,
				inputValue: 1,
				boxLabel: "Delete torrents added from the watch directory."
			}]
		}];
	}
});