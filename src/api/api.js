import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://raw.githubusercontent.com/vladislav321/e-t-p-j-files/master/Jsons/wordsEn.json',

});

export const UserAPI = {
    getWordsList()
    {
        return instance.get().then(response => response.data);
    }
}