it("should set the expected locale and timezone", () => {
  return Cypress.automation("remote:debugger:protocol", {
    command: "Emulation.setLocaleOverride",
    params: {
      locale: "de-AT",
    },
  })
    .then(() => {
      return Cypress.automation("remote:debugger:protocol", {
        command: "Emulation.setTimezoneOverride",
        params: {
          timezoneId: "Pacific/Fiji",
        },
      });
    })
    .then(() => {
      const { locale, timeZone } = new Intl.DateTimeFormat().resolvedOptions();

      console.log(locale, timeZone);
    });
});
