/*cookie操作方法*/

export default {
	set (cname, cvalue) {

    localStorage.setItem(cname, cvalue);
	},

	get (cname) {
	    return localStorage.getItem(cname);;
	},

	remove (cname) {
    localStorage.removeItem(cname);
	}

}
