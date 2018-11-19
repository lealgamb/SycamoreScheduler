package driver;

public class DegreeClass {
	int degreeClassID, rmpID, units;
	String degreeName, classNumber, className, instructorName, summary;

	public DegreeClass (int id, String degname, String num, String classname, int units,
		String instructor, int instructorid, String info) {
		this.degreeClassID = id;
		this.rmpID = instructorid;
		this.units = units;
		this.degreeName = degname;
		this.classNumber = num;
		this.className = classname;
		this.instructorName = instructor;
		this.summary = info;
	}

	@Override
	public String toString() {
		String str = "";
		str +="ID: "+this.degreeClassID+", UNITS: "+this.units+'\n'
			+"-------------------------"+'\n'
			+'\t'+this.degreeName+" "+this.classNumber+'\n'
			+'\t'+this.className+'\n'
			+'\t'+this.instructorName+" ("+this.rmpID+")"+'\n';
		return str;
	}
}