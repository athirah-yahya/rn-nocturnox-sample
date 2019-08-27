// ------------------------------------------------
// ------------------------------------------------
// IMPORTS
// ------------------------------------------------
import TSize from "./Base/Sizes";
import {BASE as TColor} from "./Base/Colors";



// ------------------------------------------------
// ------------------------------------------------
// CONSTS
// ------------------------------------------------

const COLORS = {
	primary: TColors.primary.base,
	secondary: TColors.primary.background,
}


// ------------------------------------------------
// ------------------------------------------------
// CONFIGS
// ------------------------------------------------

export default {
	padding: {
		horizontal: 20,
		top: 10,
		bottom: 10,
	},

	base: {
		background: TColors.primary.background,
		core: TColors.primary.background,
		statusBar: "inverse",
	},

	header: {
		heigth: TSizes.base(4),
		background: TColors.primary.background,
		buttonSize: TSizes.text,
		buttonColor: TColors.primary.background,
		primaryTextColor: TColors.base.black,
		secondaryTextColor: TColors.base.white,
    titleAlign: "center",
	},

	footer: {
		heigth: TSizes.base(5),
		background: TColors.primary.background,
		menuSize: TSizes.text,
		menuInactiveColor: TColors.secondary.text,
		menuActiveColor: TColors.primary.text,
	},
}