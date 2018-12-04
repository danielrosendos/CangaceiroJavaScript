System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class ApplicationException extends Error {
                constructor(msg = '') {
                    super(msg);
                    this.name = this.constructor.name;
                }
            }

            _export('ApplicationException', ApplicationException);

            const exception = ApplicationException;

            function isApplicationException(err) {
                return err instanceof exception || Object.getPrototypeOf(err) instanceof exception;
            }

            _export('isApplicationException', isApplicationException);

            function getExceptionMessage(err) {
                if (isApplicationException(err)) {
                    return err.message;
                } else {
                    console.log(err);
                    return 'Não Foi Possível Realizar a Opereação.';
                }
            }

            _export('getExceptionMessage', getExceptionMessage);
        }
    };
});
//# sourceMappingURL=ApplicationException.js.map