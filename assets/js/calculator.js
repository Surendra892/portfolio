class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.previousOperand = ""
        this.currentOperand = ''
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand += number
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand + this.operation
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prevalue = parseFloat(this.previousOperand)
        const currentvalue = parseFloat(this.currentOperand)
        if (isNaN(prevalue) || isNaN(currentvalue)) return;
        switch (this.operation) {
            case '+':
                computation = prevalue + currentvalue
                break
            case '-':
                computation = prevalue - currentvalue
                break
            case '*':
                computation = prevalue * currentvalue
                break
            case '÷':
                computation = prevalue / currentvalue
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
    }


}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const clearButton = document.querySelector('[data-AllClear]')
const deleteButton = document.querySelector('[data-Delete]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandTextElement = document.querySelector('[ data-previous]')
const currentOperandTextElement = document.querySelector('[ data-current]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})