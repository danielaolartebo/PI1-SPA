//David Montaño Tamayo || Daniela Olarte Borja

const Utils = {

    parseRequestURL : () =>{

        let url     = location.hash.slice(1).toLocaleLowerCase || '/';
        let r       =url.split("/")
        let request = {

            resourse : null,
            id       : null,
            verb     : null
        }

        request.resourse =r[1]
        request.id       =r[2]
        request.ver      =r[3]

        return request
    }
    , sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}

export default Utils;