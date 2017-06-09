/*
 * File: app/view/RdgtaUsersList.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('sysIag.view.RdgtaUsersList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.rdgtauserslist',

    requires: [
        'Ext.Toolbar',
        'Ext.field.Search',
        'Ext.XTemplate'
    ],

    config: {
        emptyText: 'Няма данни!',
        store: 'RdgtaUsers',
        itemTpl: [
            '<div><h1>{Titla} {Name} {Prezime} {Familia}</h1></div><div><p>{Dlagnost}, тел. {GSM}</p></div><div><p>{Email}</p></div'
        ],
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'searchfield',
                        centered: true
                    }
                ]
            }
        ]
    }

});