# cypress-test-tiny

Test case for https://github.com/cypress-io/cypress/issues/7890

Note: I've chosen `de-AT` instead of `en-US` to make sure that it's not already set on your system by incident (it can still happen in case you're from Austria :D)

## Steps to reproduce

- Run `npm run cypress:open`
- Run the test
- It should now show an error that the locale is not correct