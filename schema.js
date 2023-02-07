const { Schema } = require('mongoose');

const bookMovieSchema = new Schema({
    movie: {
        type: String,
        required: [true, 'Please Select a Movie']
    },
    slot: {
        type: String,
        required: [true, 'Please choose a slot']
    },
    seats: {
        A1: {
            type: Number, required: [function () {
                return this.A2 || this.A3 || this.A4 || this.D1 || this.D2;
            }, 'Please choose at least one seat']
        },
        A2: { type: Number },
        A3: { type: Number },
        A4: { type: Number },
        D1: { type: Number },
        D2: { type: Number }
    },
    uid: Schema.Types.String

})

exports.bookMovieSchema = bookMovieSchema;
