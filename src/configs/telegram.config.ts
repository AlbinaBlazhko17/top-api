import { ITelegramOptions } from 'src/telegram/telegram.inteface';

export const getTelegramConfig = (): ITelegramOptions => {
	return {
		token: '',
		chatId: '',
	};
};
