import wc from "../modules/wiseComponent.js";
import { block, image, input, text, strictMask } from "../modules/elements.js";


let card = new wc("card", block("card"), true),
	cardVendor = text("vendor"),
	cardNumber = input("number"),
	cardValidity = input("validity"),
	cardHolder = input("holder"),
	emvChip = image("./components/emv.png", "emv"),
	cardType = image(undefined, "type");

cardVendor.textContent = "WISE";
cardNumber.type = "text";
cardHolder.type = "text";
cardValidity.type = "text";


strictMask("9999 9999 9999 9999", cardNumber)
strictMask("99/99", cardValidity);

cardNumber.value = "9999 9999 9999 9999"
cardValidity.value = "08/24"
cardHolder.value = "Card Holder Name"

cardNumber.addEventListener("change", function (e)
{
	if (e.target.value[0] === '5')
		cardType.src = "https://raw.githubusercontent.com/iliaselbadaoui/brands/master/icons/light/mastercard.svg";
	else if (e.target.value[0] === '4')
		cardType.src = "https://raw.githubusercontent.com/iliaselbadaoui/brands/master/icons/light/visa.svg";
	else if (e.target.value[0] === '3' && (e.target.value[1] === '4' || e.target.value[1] === '7'))
		cardType.src = "https://raw.githubusercontent.com/iliaselbadaoui/brands/master/icons/light/americanexpress.svg";
});
cardNumber.addEventListener("click", function (e)
{
	e.target.select();
})

card.add("vendor", cardVendor);
card.add('emv', emvChip);
card.add("number", cardNumber);
card.add("validty", cardValidity);
card.add("holder", cardHolder);
card.add("type", cardType);

export default card;