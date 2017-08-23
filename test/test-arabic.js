var getSlug = require('../lib/speakingurl').getSlug;

describe('getSlug translate arabic letters', function () {
    'use strict';

    it('should be ', function (done) {

        getSlug('بشس تاقفغقف  -  ت ب ي ق', {
                lang: 'ar'
            })
            .should.eql('bshs-taqfghqf-t-b-y-q');

        done();
    });

});