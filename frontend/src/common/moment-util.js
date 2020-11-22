import Moment from 'moment'
import { isDate } from 'lodash-es'

import CommonUtil from '@Common/common-util'

const MomentUtil = {
    setMomentLocale: function () {
        let userLocale = CommonUtil.getLanguage()
        Moment.locale(userLocale)
    },
    getMoment: function (dateTime) {
        if (isDate(dateTime) === true) {
            dateTime = new Moment(dateTime);
        }

        return Moment.parseZone(dateTime).local();
    },
    getMomentFormat: function (dateString, format) {
        return new Moment(dateString, format, true).local();
    },
    getViewFormat: function (momentObject = new Moment()) {
        // 2018-05-16 20:28:04
        return momentObject.clone()
            .local()
            .format('YYYY-MM-DDTHH:mm:ssZ');
    },
    getViewFormatOfDateTime: function (dateTime) {
        let momentObject = this.getMoment(dateTime);

        return this.getViewFormat(momentObject);
    }
};

MomentUtil.setMomentLocale();
Moment.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
Moment.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ssZ';

export default MomentUtil;
