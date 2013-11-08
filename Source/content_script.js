walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");
	
	v = v.replace(/\bWitness\b/g, "This dude I know");
	v = v.replace(/\bwitness\b/g, "this dude I know");
	v = v.replace(/\bWitnesses\b/g, "These dudes I know");
	v = v.replace(/\bwitnesses\b/g, "these dudes I know");
	
	v = v.replace(/\bAllegedly\b/g, "Kinda probably");
	v = v.replace(/\ballegedly\b/g, "kinda probably");
	
	v = v.replace(/\bNew Study\b/g, "Tumblr post");
	v = v.replace(/\bNew study\b/g, "Tumblr post");
	v = v.replace(/\bnew Study\b/g, "Tumblr post");
	v = v.replace(/\bnew study\b/g, "Tumblr post");
	v = v.replace(/\bNew Studies\b/g, "Tumblr posts");
	v = v.replace(/\bNew studies\b/g, "Tumblr posts");
	v = v.replace(/\bnew Studies\b/g, "Tumblr posts");
	v = v.replace(/\bnew studies\b/g, "Tumblr posts");
	
	v = v.replace(/\bRebuild\b/g, "Avenge");
	v = v.replace(/\brebuild\b/g, "avenge");
	
	v = v.replace(/\bSpace\b/g, "Spaaace");
	v = v.replace(/\bspace\b/g, "spaaace");
	
	v = v.replace(/\bGoogle Glass\b/g, "Virtual Boy");
	v = v.replace(/\bgoogle Glass\b/g, "Virtual Boy");
	v = v.replace(/\bGoogle glass\b/g, "Virtual Boy");
	v = v.replace(/\bgoogle glass\b/g, "Virtual Boy");
	v = v.replace(/\bGoogle Glasses\b/g, "Virtual Boys");
	v = v.replace(/\bgoogle Glasses\b/g, "Virtual Boys");
	v = v.replace(/\bGoogle glasses\b/g, "Virtual Boys");
	v = v.replace(/\bgoogle glasses\b/g, "Virtual Boys");
	
	v = v.replace(/\bSmartphone\b/g, "Pokédex");
	v = v.replace(/\bsmartphone\b/g, "pokédex");
	v = v.replace(/\bSmart Phone\b/g, "Pokédex");
	v = v.replace(/\bSmart phone\b/g, "Pokédex");
	v = v.replace(/\bsmart Phone\b/g, "Pokédex");
	v = v.replace(/\bsmart phone\b/g, "pokédex");
	v = v.replace(/\bSmartphones\b/g, "Pokédexes");
	v = v.replace(/\bsmartphones\b/g, "pokédexes");
	v = v.replace(/\bSmart Phones\b/g, "Pokédexes");
	v = v.replace(/\bSmart phones\b/g, "Pokédexes");
	v = v.replace(/\bsmart Phones\b/g, "Pokédexes");
	v = v.replace(/\bsmart phones\b/g, "pokédexes");
	
	v = v.replace(/\bElectric\b/g, "Atomic");
	v = v.replace(/\belectric\b/g, "atomic");
	
	v = v.replace(/\bSenator\b/g, "Elf-Lord");
	v = v.replace(/\bsenator\b/g, "elf-lord");
	v = v.replace(/\bSenators\b/g, "Elf-Lords");
	v = v.replace(/\bsenators\b/g, "elf-lords");
	
	v = v.replace(/\bCar\b/g, "Cat");
	v = v.replace(/\bcar\b/g, "cat");
	v = v.replace(/\bCars\b/g, "Cats");
	v = v.replace(/\bcars\b/g, "cats");
	
	v = v.replace(/\bElection\b/g, "Eating Contest");
	v = v.replace(/\belection\b/g, "eating contest");
	v = v.replace(/\bElections\b/g, "Eating Contests");
	v = v.replace(/\belections\b/g, "eating contests");
	
	v = v.replace(/\bCongressional Leader\b/g, "River Spirit");
	v = v.replace(/\bCongressional leader\b/g, "River spirit");
	v = v.replace(/\bcongressional Leader\b/g, "river Spirit");
	v = v.replace(/\bcongressional leader\b/g, "river spirit");
	v = v.replace(/\bCongressional Leaders\b/g, "River Spirits");
	v = v.replace(/\bCongressional leaders\b/g, "River spirits");
	v = v.replace(/\bcongressional Leaders\b/g, "river Spirits");
	v = v.replace(/\bcongressional leaders\b/g, "river spirits");
	
	v = v.replace(/\bHomeland Security\b/g, "Homestar Runner");
	v = v.replace(/\bHomeland security\b/g, "Homestar runner");
	v = v.replace(/\bhomeland Security\b/g, "homestar Runner");
	v = v.replace(/\bhomeland secutiry\b/g, "homestar runner");
	
	v = v.replace(/\bCould not be reached for comment\b/g, "Is guilty and everyone knows it");
	v = v.replace(/\bcould not be reached for comment\b/g, "is guilty and everyone knows it");
	
	textNode.nodeValue = v;
}


