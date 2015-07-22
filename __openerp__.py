# -*- encoding: utf-8 -*-
###############################################################################
#
#   Fields mask for Odoo
#   Copyright (C) 2015 Epyme
#   @author: Carlos Paredes <cparedes@exds.co>
#
#   This program is free software: you can redistribute it and/or modify
#   it under the terms of the GNU Affero General Public License as
#   published by the Free Software Foundation, either version 3 of the
#   License, or (at your option) any later version.
#
#   This program is distributed in the hope that it will be useful,
#   but WITHOUT ANY WARRANTY; without even the implied warranty of
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
#   GNU Affero General Public License for more details.
#
#   You should have received a copy of the GNU Affero General Public License
#   along with this program. If not, see <http://www.gnu.org/licenses/>.
#
###############################################################################

{
    'name': 'Fields mask',
    'version': '0.1',
    'license': 'AGPL-3',
    'depends': [
        'web',
    ],
    'author': 'Carlos Paredes',
    'description': """
Fields mask widgets
=============
This module adds widgets to use mask on fields, using jQuery InputMask https://github.com/RobinHerbots/jquery.inputmask.

Fields Declaration:

To use it you must declare the fields on the views as follow:

<field name="phone" widget="phone"/>
<field name="phone" widget="email"/>
<field name="phone" widget="url"/>
<field name="phone" widget="mask" options="{'mask': '(99) 9999-9999'}"/>
<field name="phone" widget="mask" options="{'mask': '(99) 9999-9999'}"/>
<field name="phone" widget="mask" options="{'alias': 'date'}"/>
<field name="phone" widget="mask" options="{'alias': 'ip'}"/>

Default masking definitions:

    9 : numeric
    a : alphabetical
    * : alphanumeric

""",
    'images': [
    ],
    'website': 'https://github.com/anex',
    'category': 'web',
    'complexity': 'intermedium',
    'demo': [],
    'data': [
        'views/web_mask_field_assets.xml',
    ],
    'qweb' : [
    ],
    'active': False,
    'installable': True,
    'application': False,
}
