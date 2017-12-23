'use strict'

module.exports = {
    ValidationError: require('./validation-error'),
    AddError:        require('./add-error'),
    ReadError:       require('./read-error'),
    UpdateError:     require('./update-error'),
    DeleteError:     require('./delete-error'),
    InternalError:   require('./internal-error')
}
