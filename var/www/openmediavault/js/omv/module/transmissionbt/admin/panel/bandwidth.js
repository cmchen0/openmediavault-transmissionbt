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
 * @class OMV.Module.Services.TransmissionBT.Admin.BandwidthPanel
 * @derived OMV.FormPanelExt
 */
OMV.Module.Services.TransmissionBT.Admin.BandwidthPanel = function(config) {
	var initialConfig = {
		title: _("Bandwidth"),
		rpcService: "TransmissionBT",
		rpcGetMethod: "getBandwidth",
		rpcSetMethod: "setBandwidth"
	};
	Ext.apply(initialConfig, config);
	OMV.Module.Services.TransmissionBT.Admin.BandwidthPanel.superclass.constructor.call(
	  this, initialConfig);
};
Ext.extend(OMV.Module.Services.TransmissionBT.Admin.BandwidthPanel, OMV.FormPanelExt, {
	getFormItems : function() {
		return [{
			xtype: "fieldset",
			title: _("Speed"),
			defaults: {
//				anchor: "100%",
				labelSeparator: ""
			},
			items: [{
				xtype: "checkbox",
				name: "speed-limit-down-enabled",
				fieldLabel: _("Limit Download"),
				checked: false,
				inputValue: 1,
				boxLabel: _("Enable download limit.")
			},{
				xtype: "numberfield",
				name: "speed-limit-down",
				fieldLabel: _("Download"),
				allowDecimals: false,
				allowNegative: false,
				allowBlank: false,
				value: 100,
				plugins: [ OMV.form.plugins.FieldInfo ],
				infoText: _("Limit download speed. Value is kb/s.")
			},{
				xtype: "checkbox",
				name: "speed-limit-up-enabled",
				fieldLabel: _("Limit Upload"),
				checked: false,
				inputValue: 1,
				boxLabel: _("Enable upload limit.")
			},{
				xtype: "numberfield",
				name: "speed-limit-up",
				fieldLabel: _("Upload"),
				allowDecimals: false,
				allowNegative: false,
				allowBlank: false,
				value: 100,
				plugins: [ OMV.form.plugins.FieldInfo ],
				infoText: _("Limit upload speed. Value is kb/s.")
			},{
				xtype: "numberfield",
				name: "upload-slots-per-torrent",
				fieldLabel: _("Upload slots"),
				allowDecimals: false,
				allowNegative: false,
				allowBlank: false,
				value: 14
			}]
		},{
			xtype: "fieldset",
			title: _("Turtle Mode"),
			defaults: {
//				anchor: "100%",
				labelSeparator: ""
			},
			items: [{
				xtype: "checkbox",
				name: "alt-speed-enabled",
				fieldLabel: _("Enable"),
				checked: false,
				inputValue: 1,
				boxLabel: _("Enable Turtle Mode.")
			},{
				xtype: "numberfield",
				name: "alt-speed-down",
				fieldLabel: _("Download"),
				allowDecimals: false,
				allowNegative: false,
				allowBlank: false,
				value: 50,
				plugins: [ OMV.form.plugins.FieldInfo ],
				infoText: _("Turtle Mode download speed. Value is kb/s.")
			},{
				xtype: "numberfield",
				name: "alt-speed-up",
				fieldLabel: _("Upload"),
				allowDecimals: false,
				allowNegative: false,
				allowBlank: false,
				value: 50,
				plugins: [ OMV.form.plugins.FieldInfo ],
				infoText: _("Turtle Mode upload speed. Value is kb/s.")
			}]
		}];
	}
});