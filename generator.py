
roles = [{"ordering":7,"Role":"Creative Officer","Name":"Anna Barnett","image":"creative.JPG"},
{"ordering":6,"Role":"Head of Marketing","Name":"Eesha Bakht","image":"marketing.jpg"},
{"ordering":3,"Role":"Head of Speakers","Name":"Jennifer Zhou","image":"speaker.JPG"},
{"ordering":10,"Role":"IT Officer","Name":"Fraser Rennie","image":"it.JPG"},
{"ordering":9,"Role":"Partnerships","Name":"Riya Sharma","image":"partnerships.jpg"},
{"ordering":0,"Role":"President","Name":"Yuming Zai","image":"pres.JPG"},
{"ordering":4,"Role":"Speakers Officer 1","Name":"Aftab Chhina","image":"speaker1.JPG"},
{"ordering":5,"Role":"Speakers Officer 2","Name":"Crystal Sang","image":"speaker2.JPG"},
{"ordering":8,"Role":"Sponsorship","Name":"Saffron Pougher","image":"sponsors.jpg"},
{"ordering":2,"Role":"Treasurer","Name":"Phoebe Simoes","image":"treasurer.JPG"},
{"ordering":1,"Role":"Vice President","Name":"Rory Welsh","image":"vice-pres.JPG"}]


HTML = '<Col xs={12} sm={6} md={4} lg={3} xl={3} className="profile-holder"><div className="profile"><img src="./members/ABCIMAGE" alt="Default"/><span className="name">{"ABCNAME"}</span><span className="role">{"ABCROLE"}</span></div></Col>'

all_html = ""
roles = sorted(roles, key=lambda k: k['ordering']) 

print(roles)

for person in roles:
    temp = HTML.replace("ABCIMAGE",person["image"])
    temp = temp.replace("ABCROLE",person["Role"])
    temp = temp.replace("ABCNAME",person["Name"])
    temp = temp +"\n"
    all_html = all_html + temp

print(all_html)