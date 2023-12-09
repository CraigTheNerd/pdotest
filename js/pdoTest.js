import { connect } from './connect'
import { showHidePassword } from './showHidePassword'
import { selectList } from './selectList'
import { validate } from './validate'

export function pdoTest() {
    showHidePassword()
    selectList()
    validate()
    connect()
}