var refObjs = glue.tableToObjects(glue.command(["list", "reference"]));
//glue.log("INFO", "ID RESULT WAS ", refObjs);

_.each(refObjs, function(refObj) {
 
    glue.log("INFO", "RefObj: ", refObj);

    if (refObj["sequence.sequenceID"]) {

        var name       = refObj["name"];
        var sequenceID = refObj["sequence.sequenceID"];
        var sourceName = refObj["sequence.source.name"];
        //glue.log("INFO", "ID RESULT WAS ", sequenceID);
        
        
        //list sequence length -w "sequenceID = 'AF133051_WEHV1_RT'"
		var lengths = glue.getTableColumn(glue.command(["list", "sequence", "length",  "-w", "sequenceID = '"+sequenceID+"'"]), "length");
		glue.log("INFO", "lengths: ", lengths);
	    var lengthValue = lengths[0]; // Access the first element
	    glue.log("INFO", "Length value: ", lengthValue);
       
		glue.inMode("reference/"+name, function() {
			
			// Add feature locations
			glue.command(["add", "feature-location", "whole_genome"]);
			glue.command(["add", "feature-location", "RT"]);			
		
		});
		glue.inMode("reference/"+name+"/feature-location/whole_genome", function() {			
			// Add feature locations
			glue.command(["add", "segment", 1, lengthValue]);		
		});
		glue.inMode("reference/"+name+"/feature-location/RT", function() {			
			// Add feature locations
			glue.command(["add", "segment", 1, lengthValue]);		
		});
		
    } else {
        glue.log("WARNING", "Missing sequence property for RefObj: ", refObj);
    }
    
});

