export default class User {
    public id : string;
    public email: string;
    public picture? : string;
    public fullName? : string;
    public nickname? : string;
    public role?;
    public description: string;
    
    public constructor(json: string) {
        var parsed = JSON.parse(json);
        this.id = parsed.id;
        this.email = parsed.email;
        this.picture = parsed.picture;
        this.fullName = parsed.fullName;
        this.nickname = parsed.nickname;
        this.role = parsed.role;
        this.description = parsed.description;
    }
    
    getRoleName() {
        switch (this.role) {
            case 1:
                return "Vartotojas";
            case 2:
                return "Forumo administratorius";
            case 3:
                return "Administratorius";
            default:
                return "Vartotojas";
        }
    }
}
