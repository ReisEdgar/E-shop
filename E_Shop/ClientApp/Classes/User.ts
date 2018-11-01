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
}
