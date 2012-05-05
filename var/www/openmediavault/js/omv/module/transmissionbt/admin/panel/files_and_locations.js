/**
 * This file is part of OpenMediaVault TransmissionBT.
 *
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 3
 * @author    Marcel Beck <marcel.beck@mbeck.org>
 * @copyright Copyright (c) 2011-2012 Marcel Beck
 * @website 	http://omv-plugins.org
 *
 * OpenMediaVault is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * OpenMediaVault is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with OpenMediaVault. If not, see <http://www.gnu.org/licenses/>.
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
		title: _("Files and Locations"),
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
			title: _("Locations"),
			defaults: {
				labelSeparator: ""
			},
			items: [{
				xtype: "fieldset",
				title: _("Download"),
				defaults: {
					labelSeparator: ""
				},
				items: [{
					xtype: "sharedfoldercombo",
					name: "download-sharedfolderref",
					hiddenName: "download-sharedfolderref",
					fieldLabel: _("Shared folder"),
					plugins: [ OMV.form.plugins.FieldInfo ],
					infoText: _("Make sure the group 'debian-transmission' has read/write access to the shared folder.")
				},{
					xtype: "textfield",
					name: "download-dir",
					fieldLabel: _("Directory"),
					allowBlank: true,
					plugins: [ OMV.form.plugins.FieldInfo ],
					infoText: _("Directory to keep downloads. If incomplete is enabled, only complete downloads will be stored here.")
				}]
			},{
				xtype: "fieldset",
				title: _("Incomplete"),
				defaults: {
					labelSeparator: ""
				},
				items: [{
					xtype: "checkbox",
					name: "incomplete-dir-enabled",
					fieldLabel: _("Enable"),
					checked: false,
					inputValue: 1,
					boxLabel: _("Enable incomplete directory.")
				},{
					xtype: "sharedfoldercombo",
					name: "incomplete-sharedfolderref",
					hiddenName: "incomplete-sharedfolderref",
					fieldLabel: _("Shared folder"),
					plugins: [ OMV.form.plugins.FieldInfo ],
					infoText: _("Make sure the group 'debian-transmission' has read/write access to the shared folder.")
				},{
					xtype: "textfield",
					name: "incomplete-dir",
					fieldLabel: _("Directory"),
					allowBlank: false,
					plugins: [ OMV.form.plugins.FieldInfo ],
					infoText: _("Directory to keep files in until torrent is complete.")
				}]
			},{
				xtype: "fieldset",
				title: _("Watch"),
				defaults: {
					labelSeparator: ""
				},
				items: [{
					xtype: "checkbox",
					name: "watch-dir-enabled",
					fieldLabel: _("Enable"),
					checked: false,
					inputValue: 1,
					boxLabel: _("Enable Watch directory.")
				},{
					xtype: "sharedfoldercombo",
					name: "watch-sharedfolderref",
					hiddenName: "watch-sharedfolderref",
					fieldLabel: _("Shared folder"),
					plugins: [ OMV.form.plugins.FieldInfo ],
					infoText: _("Make sure the group 'debian-transmission' has read/write access to the shared folder.")
				},{
					xtype: "textfield",
					name: "watch-dir",
					fieldLabel: _("Directory"),
					allowBlank: false,
					plugins: [ OMV.form.plugins.FieldInfo ],
					infoText: _("Watch a directory for torrent files and add them to transmission")
				}]
			}]
		},{
			xtype: "fieldset",
			title: _("Files"),
			defaults: {
//				anchor: "100%",
				labelSeparator: ""
			},
			items: [{
				xtype: "combo",
				name: "preallocation",
				hiddenName: "preallocation",
				fieldLabel: _("Preallocation"),
				mode: "local",
				store: new Ext.data.SimpleStore({
					fields: [ "value","text" ],
					data: [
						[ 0,_("Off") ],
						[ 1,_("Fast") ],
						[ 2,_("Full") ]
					]
				}),
				displayField: "text",
				valueField: "value",
				allowBlank: false,
				editable: false,
				triggerAction: "all",
				value: 1,
				plugins: [ OMV.form.plugins.FieldInfo ],
				infoText: _("Mode for preallocating files.")
			},{
				xtype: "checkbox",
				name: "rename-partial-files",
				fieldLabel: _("Postfix"),
				checked: true,
				inputValue: 1,
				boxLabel: _("Postfix partially downloaded files with .part.")
			},{
				xtype: "checkbox",
				name: "start-added-torrents",
				fieldLabel: _("Start Torrents"),
				checked: true,
				inputValue: 1,
				boxLabel: _("Start torrents as soon as they are added.")
			},{
				xtype: "checkbox",
				name: "trash-original-torrent-files",
				fieldLabel: _("Trash original"),
				checked: false,
				inputValue: 1,
				boxLabel: _("Delete torrents added from the watch directory.")
			}]
		}];
	}
});