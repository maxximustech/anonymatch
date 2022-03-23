<template>
    <div class="vue-otp-container" :style="{ 'gridTemplateColumns': `repeat(${amount}, 1fr)` }">
        <div v-for="(number, index) in amount" :key="index" class="vue-otp-wrapper">
            <input class="vue-otp-field v-input" :style="{color:$vuetify.theme.dark?'dodgerblue':'black'}" :type="type" :maxlength="max" :placeholder="placeholder" @keyup="isNumber($event, index)" autocomplete="off" @focusin="onFocusIn($event, index)" >
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isFieldCompleted: false
            }
        },
        props: {
            max: {
                type: Number,
                default: 1
            },
            type: {
                type: String,
                default: 'tel'
            },
            placeholder: {
                type: String,
                default: '●'
            },
            amount: {
                type: Number,
                default: 6
            },
            onFieldCompleted: {
                type: Function,
                default: () => {}
            },
            onFill: {
                type: Function,
                default: () => {}
            }
        },
        methods: {
            onFocusIn (e, index) {
                const otpFields = document.querySelectorAll('.vue-otp-field')
                otpFields[index].value = ''
            },
            getSelectionText() {
                if (window.getSelection) {
                    try {
                        var activeElement = document.activeElement;
                        if (activeElement && activeElement.value) {
                            // firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=85686
                            return activeElement.value.substring(activeElement.selectionStart, activeElement.selectionEnd);
                        } else {
                            return window.getSelection().toString();
                        }

                    } catch (e) {
                    }
                } else if (document.selection && document.selection.type != "Control") {
                    // For IE
                    return document.selection.createRange().text;
                }
            },
            isNumber: function (e, index) {
                const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                const otpFields = document.querySelectorAll('.vue-otp-field')
                otpFields[index].setSelectionRange(0, 1)
                const selObj = window.getSelection()
                const selectedText = this.getSelectionText()
                const selectedValue = parseInt(selectedText, 10)
                if (numbers.indexOf(selectedValue) > -1) {
                    otpFields[index].value = selectedValue
                    if (index !== (this.amount - 1)) {
                        otpFields[index + 1].focus()
                        otpFields[index + 1].value = ''
                    }else{
                       otpFields[index].blur()
                    }
                }else{
                    otpFields[index].value = ''
                }
                if (selectedText === '') {
                    otpFields[index].value = ''
                    if (index !== 0) {
                        otpFields[index - 1].focus()
                        otpFields[index - 1].value = ''
                    }
                }
                const inputValues = []
                otpFields.forEach((field) => {
                    inputValues.push(field.value)
                })
                const isFieldsComplete = inputValues.every(value => value !== '')
                this.onFill({
                    isFieldsComplete,
                    currentValue: inputValues[index],
                    values: inputValues.join('')
                })
                if (index === (this.amount - 1) && isFieldsComplete) {
                    const values = inputValues.join('')
                    this.onFieldCompleted(values)
                }
            }
        }
    }
</script>


<style>
    .vue-otp-container {
        display: -moz-grid;
        display:-ms-grid;
        display: grid;
        align-items: center;
        justify-content: center;
    }
    .vue-otp-wrapper {
        display: -moz-box;
        display: -webkit-inline-flex;
        display: -ms-flexbox;
        display: flex;
        padding-left: 5px;
        padding-right: 5px;
    }
    .vue-otp-field {
        border-radius: 5px;
        border: 2px solid transparent;
        transition: all .1s ease-in;
        font-size: 1em;
        font-weight: 900;
        text-align: center;
        position: relative;
        width: 100%;
        min-height: 1px;
        padding: 5px;
    }
    .vue-otp-field::-webkit-inner-spin-button, .vue-otp-field::-webkit-outer-spin-button {
        -moz-appearance: textfield;
        -webkit-appearance: none;
        margin: 0;
    }
    .vue-otp-field:active, .vue-otp-field:focus {
        outline: 0;
        box-shadow: none;
        border-color: dodgerblue;
    }
    .vue-otp-field:active::placeholder {
        opacity: 0;
    }
    .vue-otp-field:focus::placeholder {
        opacity: 0;
    }
    .vue-otp-field::placeholder {
        color: dodgerblue;
    }
    .vue-otp-field.otp--filled {
        border-color: dodgerblue;
    }
</style>