
function validateFormHTML5(idForm,jsonValidate,callback=function(){}){
	this.idform=idForm;
	this.jsonValidate=jsonValidate;
	this.settings={};
	this.formValidate=true;
	this.submitCallback=callback;
	this.AttributeInputs={
		required:'REQUIRED',
		minLength:'minlength',
		maxLength:'maxlength',
	};

	this.regexps = {
        url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
        // email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
		email:'^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$',
        creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
        alphaNumeric: /^[A-Za-z0-9]+$/,
		numeric: /^[0-9]+$/,
        timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
        dateString: /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/,
        usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/,
        caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
        ukPostCode: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
        nanpPhone: '^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$',
		cp:'^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$',
        eppPhone: '^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$',
		phone:'^[0-9]{9}$',
        socialSecurityNumber: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
        affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
        hexadecimal: /^[0-9a-fA-F]+$/,
        hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
        ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
        ipv6: /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
        ip: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
    };
	this.createSettings();
	this.applyRules();

	this.form=document.getElementById(this.idform);
    this.form.addEventListener('submit',this.submitCallback.bind(this),false);
}


validateFormHTML5.prototype.createSettings=function(){
	var preSettings=this.jsonValidate;

	for (var index in preSettings){
		if (index==='rules') this.addRulestoSettings(preSettings[index]);
        if (index==='messages') this.addMessagestoSettings(preSettings[index]);
		if (index==='custom') {
			this.addCustomtoSettings(preSettings[index]);
		}
		if (index==='formValidate') this.formValidate=this.jsonValidate.formValidate;

		this.addCustomDefaulttoSettings();
	}
};

validateFormHTML5.prototype.addRulestoSettings=function(preRules){
	for (var index in preRules){
		this.settings[index] = typeof this.settings[index] !== 'undefined' ? this.settings[index] : {rules:{},messages:{},custom:{}};
		this.settings[index].rules.required = typeof preRules[index].required !== 'undefined' ? preRules[index].required : '';
		this.settings[index].rules.email = typeof preRules[index].email !== 'undefined' ? preRules[index].email : '';
		this.settings[index].rules.max_length = typeof preRules[index].max_length !== 'undefined' ? preRules[index].max_length : '';
		this.settings[index].rules.min_length = typeof preRules[index].min_length !== 'undefined' ? preRules[index].min_length : '';
		this.settings[index].rules.custom = typeof preRules[index].custom !== 'undefined' ? preRules[index].custom : '';

	}
};

validateFormHTML5.prototype.addMessagestoSettings=function(preMessages){
	for (var index in preMessages){
		this.settings[index] = typeof this.settings[index] !== 'undefined' ? this.settings[index] : {rules:{},messages:{},custom:{}};
		this.settings[index].messages.required = typeof preMessages[index].required !== 'undefined' ? preMessages[index].required : '';
		this.settings[index].messages.min_length = typeof preMessages[index].min_length !== 'undefined' ? preMessages[index].min_length : '';
		this.settings[index].messages.max_length = typeof preMessages[index].max_length !== 'undefined' ? preMessages[index].min_length : '';
		this.settings[index].messages.custom = typeof preMessages[index].custom !== 'undefined' ? preMessages[index].custom : undefined;
	}
};

validateFormHTML5.prototype.addCustomtoSettings=function(preCustom){
	for (var index in preCustom){
		this.settings[index] = typeof this.settings[index] !== 'undefined' ? this.settings[index] : {rules:{},messages:{},custom:{}};
		this.settings[index].custom.inputCSS = typeof preCustom[index].inputCSS !== 'undefined' ? preCustom[index].inputCSS : '';
		this.settings[index].custom.labelCSS = typeof preCustom[index].labelCSS !== 'undefined' ? preCustom[index].labelCSS : '';
		this.settings[index].custom.idError = typeof preCustom[index].idError !== 'undefined' ? preCustom[index].idError : '';
	}
};

validateFormHTML5.prototype.addCustomDefaulttoSettings=function(index){
	for (var index in this.settings){
		this.settings[index] = typeof this.settings[index] !== 'undefined' ? this.settings[index] : {rules:{},messages:{},custom:{}};
		this.settings[index].custom.inputCSS = typeof this.settings[index].custom.inputCSS !== 'undefined' ? this.settings[index].custom.inputCSS : '';
		this.settings[index].custom.labelCSS = typeof this.settings[index].custom.labelCSS !== 'undefined' ? this.settings[index].custom.labelCSS : '';
		this.settings[index].custom.idError = typeof this.settings[index].custom.idError !== 'undefined' ? this.settings[index].custom.idError : '';
	}
}

validateFormHTML5.prototype.applyRules=function(){
	var settings=this.settings;
	var input=null;
	for (var index in settings){
		self=this;
		if (this.validateForm!==true) {
			document.getElementById(index).onblur=function(e){self.validateInput(e)};
        }
		if (settings[index].rules.required) {
			input=document.getElementById(index).setAttribute(this.AttributeInputs.required,this.AttributeInputs.required);
        }
		if (settings[index].rules.email) {
			input=document.getElementById(index).setAttribute('pattern',this.regexps[settings[index].rules.custom]);
        }
		if (settings[index].rules.custom) {
			input=document.getElementById(index).setAttribute('pattern',this.regexps[settings[index].rules.custom]);
        }
		if (settings[index].rules.max_length) {
			input=document.getElementById(index).setAttribute(this.AttributeInputs.maxLength,this.settings[index].rules.max_length);
        }

		if (settings[index].rules.min_length) {
			input=document.getElementById(index).setAttribute(this.AttributeInputs.minLength,this.settings[index].rules.min_length);
        }


		document.getElementById(index).oninvalid=function(e){self.activeError(e)};
	}
};

validateFormHTML5.prototype.validateInput=function(event){
	var input=document.getElementById(event.target.id);

	if (input.validity.valid===false) {
		this.activeError(event);
	}
	else {
		this.removeCssCustom(event.target.id);
		//document.querySelector('label[for='+input.name+']').classlist.remove();
		//document.getElementById(this.settings[inputId].custom['idError']).style.display='none';
	}
};

validateFormHTML5.prototype.activeError=function(event){
	var inputInvalid=document.getElementById(event.target.id);
	var labelInvalid=document.querySelector('#'+this.idform+' label[for=\''+inputInvalid.getAttribute('name')+'\']');

	if (inputInvalid.validity.valid===false) {
		console.log(inputInvalid.validity);
		
		
		if (typeof this.messageInputError(event)!=='undefined') {
			if (this.settings[event.target.id].custom['idError']==='') {
				inputInvalid.setCustomValidity(this.messageInputError(event));
			}
			else {
				var divError=document.querySelector('#'+this.settings[event.target.id].custom.idError);
				if (divError!==null) {
                    divError.innerHTML=this.messageInputError(event);
					divError.style.display='block';
                }
			}
        }
		this.addCssCustom(event.target.id);
    }
	else {
		this.removeCssCustom(event.target.id);
	}
};

validateFormHTML5.prototype.messageInputError=function(event){
	var inputInvalid=document.getElementById(event.target.id);
	if (this.settings[event.target.id].custom.idError!=='') event.preventDefault();

	var message='';

	if (this.settings[event.target.id].messages.custom!=='') {
        message=this.settings[event.target.id].messages.custom;
    }

	if (inputInvalid.validity.customError===true) {
		message=this.settings[event.target.id].messages.custom;
	}

	if (inputInvalid.validity.valueMissing===true) {
        message=this.settings[event.target.id].messages.required;
    }

	if (inputInvalid.validity.tooShort===true) {
		message=this.settings[event.target.id].messages.min_length;
	}


	return message;
};

validateFormHTML5.prototype.addCssCustom=function(idInput){
	var inputInvalid=document.getElementById(event.target.id);
	var labelInvalid=document.querySelector('#'+this.idform+' label[for=\''+inputInvalid.getAttribute('name')+'\']');
	if (this.settings[idInput].custom.inputCSS!=='') {
        document.getElementById(idInput).classList.add(this.settings[idInput].custom.inputCSS);
    }
	if (labelInvalid!==null) {
		if (this.settings[idInput].custom.labelCSS!=='') {
			labelInvalid.classList.add(this.settings[idInput].custom.labelCSS);
		}
	}

}

validateFormHTML5.prototype.removeCssCustom=function(idInput){
	var inputInvalid=document.getElementById(event.target.id);
	var labelInvalid=document.querySelector('#'+this.idform+' label[for=\''+inputInvalid.getAttribute('name')+'\']');
	if (!!this.settings[idInput].custom.inputCSS) document.getElementById(idInput).classList.remove(this.settings[idInput].custom.inputCSS);
	if (!!this.settings[idInput].custom.idError) document.getElementById(this.settings[idInput].custom.idError).innerHTML='';
	labelInvalid.classList.remove(this.settings[idInput].custom.labelCSS);
}

validateFormHTML5.prototype.formCleaCSSCustom=function(){
	var rules=this.settings;

	for (var index in rules.custom){
		this.removeCssCustom(index);
	}
}



if ( typeof module != 'undefined' && module.exports ) {
	module.exports = validateFormHTML5;
}
