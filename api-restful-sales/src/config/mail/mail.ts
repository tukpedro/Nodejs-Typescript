interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  dafaults: {
    from: {
      email: process.env.MAIL_ADRESS,
      name: process.env.MAIL_NAME,
    },
  },
} as unknown as IMailConfig;
