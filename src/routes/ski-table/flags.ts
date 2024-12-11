import Norway from '~icons/emojione-v1/flag-for-norway';
import Sweden from '~icons/emojione-v1/flag-for-sweden';
import Germany from '~icons/emojione-v1/flag-for-germany';
import Finland from '~icons/emojione-v1/flag-for-finland';
import USA from '~icons/emojione-v1/flag-for-united-states';
import Russia from '~icons/emojione-v1/flag-for-russia';
import Austria from '~icons/emojione-v1/flag-for-austria';
import Switzerland from '~icons/emojione-v1/flag-for-switzerland';
import Slovenia from '~icons/emojione-v1/flag-for-slovenia';
import Italy from '~icons/emojione-v1/flag-for-italy';
import Japan from '~icons/emojione-v1/flag-for-japan';
import Poland from '~icons/emojione-v1/flag-for-poland';
import Canada from '~icons/emojione-v1/flag-for-canada';
import Latvia from '~icons/emojione-v1/flag-for-latvia';
import Belarus from '~icons/emojione-v1/flag-for-belarus';
import Kazakhstan from '~icons/emojione-v1/flag-for-kazakhstan';
import Czechia from '~icons/emojione-v1/flag-for-czechia';
import Ukraine from '~icons/emojione-v1/flag-for-ukraine';
import Estonia from '~icons/emojione-v1/flag-for-estonia';
import Armenia from '~icons/emojione-v1/flag-for-armenia';

export const flags = {
	Norway,
	Sweden,
	Germany,
	Finland,
	USA,
	Russia,
	Austria,
	Switzerland,
	Slovenia,
	Italy,
	Japan,
	Poland,
	Canada,
	Latvia,
	Belarus,
	Kazakhstan,
	Czechia,
	Ukraine,
	Estonia,
	Armenia
} as const;
export type Flags = keyof typeof flags;
