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
	primary: TColors.primary.text,
	secondary: TColors.primary.border,
	tertiary: TColors.secondary.border,
	error: TColors.primary.error,
  rightIcon: TColors.primary.base,
}

// ------------------------------------------------

const KEYBOARD = {
	default: "default",
	numeric: "number-pad",
	email: "email-address",
}

// ------------------------------------------------

const AUTOCAPITALIZE = {
	none: "none",
	characters: "characters",
	words: "words",
	sentences: "sentences",
}

// ------------------------------------------------

const INPUT = {
	textColor: COLORS.primary,
	labelColor: COLORS.tertiary,
	hintColor: COLORS.tertiary,
	errorColor: COLORS.error,
	inactiveColor: COLORS.secondary,
	activeColor: COLORS.primary,
  rightIconColor: COLORS.rightIcon,
	paddingHorizontal: TSizes.base(0),
	paddingVertical: TSizes.base(.5),
	secured: false,
	keyboard: KEYBOARD.default,
	autoCapitalize: AUTOCAPITALIZE.none,
	autoCorrect: false,
	picker: null,
}


// ------------------------------------------------
// ------------------------------------------------
// CONFIGS
// ------------------------------------------------

export default {
	default: {
		... INPUT,
	},

	String: {
		... INPUT,
	},

	Number: {
		... INPUT,
		keyboard: KEYBOARD.numeric,
	},

	Email: {
		... INPUT,
		keyboard: KEYBOARD.email,
	},

	Password: {
		... INPUT,
		secured: true,
	},

	// area
	// picker
}