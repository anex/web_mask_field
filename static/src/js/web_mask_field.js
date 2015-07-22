openerp.web_mask_field = function (instance) {
    instance.web.form.FieldMask = instance.web.form.FieldChar.extend({
        mask: '',
        init: function(field_manager, node) {
            this._super(field_manager, node);
            if (this.options.mask) {
                var mask;
                $.each(this.options, function(key, element) {
                    mask = "'"+ key + "': '" + element+ "'";
                });
                this.mask = mask;
            };
        },

        render_value: function () {
            var self = this;
            this._super();
            if (this.mask !== '') {
                this.$('input').attr('data-inputmask', this.mask);
                this.$('input').inputmask(undefined, {
                    onincomplete: function () {
                        self.$el.addClass('oe_form_invalid');
                    },
                    oncomplete: function () {
                        self.$el.removeClass('oe_form_invalid');
                    },
                });
            }
        },
    });

    instance.web.form.widgets.add('mask', 'instance.web.form.FieldMask');

    instance.web.form.FieldPhone = instance.web.form.FieldChar.extend({
        mask: "'mask': '(99) 9999-9999'",
        render_value: function () {
            var self = this;
            this._super();
            if (this.mask !== '') {
                this.$('input').attr('data-inputmask', this.mask);
                this.$('input').inputmask(undefined, {
                    onincomplete: function () {
                        self.$el.addClass('oe_form_invalid');
                    },
                    oncomplete: function () {
                        self.$el.removeClass('oe_form_invalid');
                    },
                });
            }
        },
    });

    instance.web.form.widgets.add('phone', 'instance.web.form.FieldPhone');

    instance.web.form.FieldEmail.include({
        mask: "'alias': 'email'",

        render_value: function () {
            var self = this;
            this._super();
            if (this.mask !== '') {
                this.$('input').attr('data-inputmask', this.mask);
                this.$('input').inputmask(undefined, {
                    onincomplete: function () {
                        self.$el.addClass('oe_form_invalid');
                    },
                    oncomplete: function () {
                        self.$el.removeClass('oe_form_invalid');
                    },
                });
            }
        },
    });

    instance.web.form.FieldUrl.include({
        mask: "'alias': 'url'",

        render_value: function () {
            var self = this;
            this._super();
            if (this.mask !== '') {
                this.$('input').attr('data-inputmask', this.mask);
                this.$('input').inputmask(undefined, {
                    onincomplete: function () {
                        self.$el.addClass('oe_form_invalid');
                    },
                    oncomplete: function () {
                        self.$el.removeClass('oe_form_invalid');
                    },
                });
            }
        },
    });
};
