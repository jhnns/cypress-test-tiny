const {locale} = new Intl.DateTimeFormat().resolvedOptions();

if (locale !== 'en-US') {
    throw new Error(
        `The test environment does not provide the expected locale setup: ${JSON.stringify(
            {locale},
            null,
            '  ',
        )}`,
    );
}