export interface Movie {
    id:number,
    title:string,
    overview:Text,
    poster_path: string,
    popularity: Float32Array,
    release_date: Date,
}

/*
title: DataTypes.STRING,
    overview: DataTypes.TEXT,
    poster_path: DataTypes.STRING,
    popularity: DataTypes.FLOAT
    */