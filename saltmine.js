rooms["The Truck"] = {
  description: "'Use the Serial Comma.' You are in truck.",
  doors: [["Exunt", "<p style=\"font-size: 100px;\">Salt Mine Adventures, or, Shun The Dead God</p>"]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: "Yeah that's right we have a cold open in a text adventure.\nUse the serial comma. [As an aside this should in fact be shown to the player, not for any particular reason except for the fact that the serial comma is the best comma. Maybe the whole game should be started simply with the line \"Use the Serial Comma.\"]"
};

rooms["<p style=\"font-size: 100px;\">Salt Mine Adventures, or, Shun The Dead God</p>"] = { //the name of this room is a hack so that it styles all fancy.
  description: "The guards toss you out of the truck and into your new home. You pick yourself up and brush yourself off. So begins the day proper.", //"day proper" is a weird phrase, might not flow well here.
  doors: [["Look around","The Mouth"]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: "Day One"
};

rooms["The First Dream"] = {
  description: "",
  doors: [["",""]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: ""
};
rooms["Day Two"] = {
  description: "",
  doors: [["",""]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: "I imagine the 'Day' rooms are just to let you get your bearings (and for the game to set variables) as the day begins, and you can't do anything in them."
};
rooms["The Second Dream"] = {
  description: "",
  doors: [["",""]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: ""
};
rooms["Day Three"] = {
  description: "",
  doors: [["",""]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: ""
};
rooms["The Third Dream"] = {
  description: "",
  doors: [["",""]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: ""
};
rooms["Day Four"] = {
  description: "",
  doors: [["",""]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: ""
};

rooms["Miner Bill"] = {
  description: `Bill. Miner that's been stuck down there for 5 years. Hasn't seen the light of day since the fateful day when he was left there. Nobody knows how he manages to live down here. But you know his name is Bill.
Something like that
Sometjing really odd and vague
But his name is just bill
That's all there is to his character
Bill.
'How... how did you survive down here?' Asked Puncturing Percival.
'Salt is a very nutritious substance!' Insists Bill, as he nonchalantly kicks something white and bone-esque deeper into the tunnel.
'Is that a skull?'
'I.. I'm a big fan of shakespeare'`,
  doors: [["",""]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: ""
};

//template
rooms[""] = {
  description: "",
  doors: [["",""]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: ""
};

rooms["The Mouth"]={
  description: "You're in the mouth of a large natural cave. To the south, tunnels-- some man-made, some natural, lead deeper into the mine. To the north, hot sunshine streams in through the huge bars placed in front of the yawning opening. A guard leans against the outside of the bars, smoking in a bored fashion.",
};

rooms["Salty Cavern"]={
  description: "You are in the caverous Salty Cavern.",
  commentary: ""
};

rooms["Tunnel #628"]={
  description: 'The "#628" above the entrance to this tunnel rather obviously used to read #629 before some clever overseer decided he could make this into Tunnel #628 by closing up the "9" on the sign. They did a poor job.',
  commentary: "The player works around these tunnels"
};

rooms["Tunnel #629"] = {
  description: "You're pretty sure Hairy Bill works in Tunnel #629. You cringe.",
  doors: [["",""]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: ""
};

rooms["The Abandoned Tunnel"] = {
  description: "The Abandoned Tunnel is a dark room. This tunnel is entirely lacking in salt, so work on it was stopped. All the lights have been long removed from this tunnel. The tunnel is marked with ragged gashes where pickaxes were swung at salt crystals.",
  doors: [["",""]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: ""
};
rooms["Tunnel #627"] = {
  description: "Your standard salt mining tunnel. One set of lights is strung along the right side of the tunnel wall. Some of the more confident or stupid miners have left their picks and bags along the crystals they've been picking apart.",
  doors: [["",""]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: ""
};
rooms["Tunnel #627.5"] = {
  description: "Tunnel #627.5 is a dark room. There are no lights in tunnel #627.5. It seems like any other tunnel. You wonder if getting in here was worth it. You wonder why the tunnel was boarded up to begin with.",
  doors: [["",""]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: "PLOT TWIIIIIIST- use this room for some plot twist after the player goofs their way into 627.5."
};
rooms[""] = {
  description: "",
  doors: [["",""]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: ""
};
rooms[""] = {
  description: "",
  doors: [["",""]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: ""
};

/* undealtwith scribblings:

[Well fuck
I NEED A HOT TOWEL GODDAMMIT
/WHERE'S THE HOT TOWEL GUY/]

PUT the dream sequence where you wake up outside in the same place in Dead God?

A uniform is a kind of thing. A gun is a kind of thing.
The guard wears a uniform and carries a gun. The guard is scenery. The guard is in the Mouth. [The guard is outside the bars to the north of the Mouth] Another guard wears a uniform. Another guard carries a gun. Another guard is scenery. The bars are in the Mouth. "Vertical iron bars, designed to keep prisoners in and-- actually, that's about it. Who would want to sneak in? <i>Salt thieves</i>?" The bars are not portable. The bars are scenery.
The rails are a backdrop. the rails are everywhere.
The minecart is a vehicle. [put this somewhere out of the way initially for fun]
Entrance #627.5 is a door. "The tunnel between tunnels 627 and 628 has been cemented shut very lazily. The color of the cement is very different from that of the rest of the wall, and you can see a board poking out of the cement." Tunnel #627.5 is south of Entrance #627.5.
Stabby Jim is a person. "Stabby Jim is a ruthless, cunning man who eyes you suspiciously." Stabby Jim is in Salty Cavern.


	say "You are an ethnic Grektan from the country of Sadsacksylvania. You emigrated illegally to Landplacia to find work to support your family, but you were subsequently found and arrested under charges of Potential Espionage. You speak only Grektan, a language so complex that no one bothers to learn it except babies. You dream of the day Grektans will form their own country, away from their ethnic rivals, the Kral, whom you believe are causing most of the troubles in the world. You are an able-bodied adult. The only English word you know is 'hello'.";
	say "я";
	[TODO: format these things as presentation slide]
	say "VERBS:[line break]* you will only have to use the verbs 'HELP,TAKE, LOOK, USE, DROP, and GO' in this adventure.[line break]* There are other verbs, but they are shorthand."[Come to think of it you'll never need talk in this game];
	say "SHORTHAND:  [line break]
* There are various shorthands in the game [line break]
* Instead of the compass directions (such as East, North, Northeast, etc) you can use one letter to go in that direction [line break]
* This also works for up and down [line break]
* Instead of 'take inventory' you can type 'i' [line break]
* Instead of 'take' and 'drop' you can type 't' or 'd'";
describe truck, slideshow, guard, chair, restraint. The guards mostly speak Russian, btw.
	Say "The last slide consists solely of four bold, red, completely capitalized words: 'SHUN THE DEAD GOD'. You wonder absently what they mean. If only you understood English.";

Epilogue, or, What We Have Learned

Possible Chapters:
The Prophet
The Saint
The Sinner
The Hierophant
The Mezzanine
The Illusion of Progress
The Bleeding
The Once and Future
The Nature of the Beast

'Look at yourself to continue'

At one point a character says 'there’s more than one way to skin a cat' and everyone is moderately horrified. The character is then referred to (in something of a running joke (this running joke is a running joke of the game, not of the characters (ie they still don’t understand the expression, and that’s funny))) as a 'cat-skinning bastard' and various references are made to his supposed cruelty to animals)

Hot Towel Guy:shows up when you need something. Only ever has hot towels. Hangs out in rooms even if you do not need a hot towel. Is not mentioned after he appears. Possibly hot towel guy is left in a room, you revisit room. its empty, everyones left. hes still standing with a hot towel. you enter. he asks, hot towel? maybe at some point you need a hot towel. he is not there. 
if you look at hot towel guy while hes in the room, hes described as
hot towel guy stands placidly with a rather hot looking towel. He is indifferent to his surroundings.

Stabby Jim:

Incision Ian:

Laceration Larry:

Jabby Jerry:

(At one point the p-named members organize a coup to stand up for their 'p-ness' (penis))

Pokey Pete:

Prodding Persephone:

Puncturing Peter:

Prickly Preston:

Exsanguination Edgard:

Stick’em Sally:

Thrusting Theodore:

Mr Millet (Mr Rice)

(In a bonus side-quest, you learn the dead god’s name was 'shaun'. get it? Because 'shun'/'shaun' ha ha ha! Actually this  DEFINETLY WILL be in the game.)
---
'But you don’t understand a word I’m saying, do you?' She chuckles. You smile and nod. She’s right.
---
'Cuz I understand things, kid.' He rasps. 'I understand how the moon fits into the stars, how the ship fits into the the bottle. Now, I’m gonna teach you an old trick,' he leans forward. 'Repeat after me: I.'
[Dialogue option]
`
You don’t understand his words, but his gestures are sufficient. 'I,' you repeat.
He smiles. 'Understand.'
'Understand,' you say.
'Every.' He says.
'Every.' you say.
'Word.' He says.
'Word.' you say.
'You’re.' He says.
'You’re.' you say.
'Saying.' He says.
'Saying.' you say.
'Motherfucker.' He says.
'Motherfucker.' you say.

He leans back and takes a drag on his cigarette. You are confused as to what has transpired. 'All together now,' he croaks. 'I understand every word you’re saying, motherfucker.'

You stumble through the sentence. When you finish, he smiles and blows a smoke ring in your direction.
`
[Player learns new phrase]


Saying "Dreams" to Stabby Pete will cause him to tell you about his dream of owning a knife & sharp object emporium.

The only items I can think of rn are: pickaxe, canteen, helmet, overalls, food (assorted types), shiv, minecart, and... salt crystal? Need to research what a salt mine actually makes.
And the cave segments... I also don't care how they look. As long as all the segments and people look distinct enough for to player to remember.
You can even design the entire cave using statements like "above the chamber is the mud room." And "the entrance is to the south of the mud room". Remember that this is a mine, and is thus full of tunnels, some of which have minecart tracks. Potential: minecart puzzles? The kids love minecarts... also, there is a cave-in at one point in the story.
There also needs to be places for the prisoners to eat, sleep, etc. I feel like these should be built into the mine. It is a cruel and unrelenting place, though ofc the tone of the story may be comic somehow.
There is one guard the player can talk to, who only speaks Russian. There is a poster on a wall designating that someone, possibly Stabby Jim has won "prisoner of the month". Stabby Jim has the nicest helmet. There are two types of helmets, one with a light and one without. possible puzzle involves gettting light into a dark section to progress.
The general form of the plot congeals before me: the player arrives at prison, meets everyone, solves puzzles, and has the strangest dreams about the dead god. Stabby Jim, the top dog in the prison, is suddenly missing presumed dead after a cave-in. His hat is the only thing found of him. The social structure of the prison collapses into two competing factions: the Ps and the Stabby Jims. The player, having found Stabby Jim's hat, is revered as sort of the leader/mascot of the Stabby Jims. Eventually the player clears the rubble from the cave-in to find the tomb of the dead god, and a tunnel that stabby jim has used to escape, which is now guarded by the guards (possible ending where the player is given something (freedom?) by the guard if he has talked to him enough?). The player lies on the altar of the dead god to have one final dream, the one where the god dies.

(Standard Items)
Pickaxe: A pickaxe is what you would call this if you were a square. Instead Salt-Slang designates you call this a rock puncher, a salty stallion, or an extreme backscratcher. 
Canteen: A canteen. It's like a bottle but flatter and more intense.
Helmet: Your helmet is finely crafted out of some brittle piece of some unidentifiable metal by the gifted craftschildren of some sweatshop. Probably.
Overalls: Overalls are a maximally practical piece of clothing. Overall, not bad. 
Salted Fish: This salted fish could use more salt. 
Salt Water: Why do we have this?
Salted Salt: Shitty Bill's Salted Salt. A gag gift that unfunny miners give to one another.
Pet Salt Rock: This is a rock with some salt in it which has had googly eyes glued to it. Secretly you think it's kind of cute. You scream internally. 
Salt Shaker: The salt shaker, official flower [What?] of the CORP NAME salt mines.
Pepper Shaker: Filled with, you guessed it, salt.
Boots: These boots were made for walking.
Socks: More hole than sock at this point.
Salt Bag: A bag for transporting salt.
Stevie's Special Salt Bag: A bag for transporting salt, ostensibly. This large salt bag has a small pouch in which some salt can be deposited to make the bag look full. A wrinkle in the bag hides an opening into the main part of the bag, in which you can put anything you want. The bottom of the bag contains a sort of metal dish that retains the bags shape. 
Bandage: Oh look at mister fancy over here, doesn't want some harmless salt on his precious wounds. This bandage heals you for 5 damage and stops salt damage. 
//Hey, here's an idea for a game mechanic. You take damage from mine-salt getting into wounds if you've taken damage. This continues until you bandage your wounds.

(Insults)
Fat-fingered oaf
Cat-skinning bastard
Lemon-stealing whore
Autistic piece of shit
Meme-Loving Fuck
Syphilitic Moron


(Easter Eggs) 
Fingers: Your fingers are fat and you are an oaf. You fat fingered oaf.
100 Ways to Skin a Cat: Not only is there more than one way to skin a cat, there are exactly 100 ways to skin a cat.
Easter Egg: Oh you're very clever aren't you?
Development Notes: Development Note #1: I'm spending far too much time writing flavor text and easter eggs.
*/


rooms["The Tomb of the Dead God"]={
  description: "",
  commentary: "You only get here at the end of the game. Some things happen here."
};

rooms["The Final Dream"] = {
  description: `They strode into my temple that night, the four of them who would be the death of me. The woman at the front of the party was carrying a sword, the man behind her a torch, the man behind him a club, and the man behind him his own spleen. The final man’s whimper was cut off by the woman, who barked my name at me.
'You are charged with terrorizing the countryside,' she continued,  'killing and maiming man, woman, and child. How do you plead?'
'Oh, guilty of course!' She seemed stunned my tone so I continued. 'It’s just in my nature, I guess. Or perhaps it was because of my upbringing; let me tell you about my childhood...' My shadow, in the flickering light, appeared for a moment to be reclining on a leather couch.
'I don’t care.' The woman said. 'You have pled guilty, and the punishment for your crimes is death.' She spoke formally, but I could see a rage in her eyes; perhaps she had known someone I had killed.
I laughed, and my shadow swelled and drew closer to her. 'Death? And how do you plan on that? I am immortal, unending! No sword can cut me! No fire can burn me! No club can touch me!'
'Well then,' she said, tossing her sword aside. It hit the ground with a clank. 'It’s a good thing I’m going to beat you to death with my bare hands.' She spoke softly now, but the leather in her gloves rustled as she curled her hands into fists. 'Bitch.' 
This was the pièce de résistance! My shadow shrunk slightly and rippled with my laughter. 'Do you really intend to--' my words were cut off by her knuckles.
I was stunned. How? Why? Who? These questions swelled in my head as the woman pounded me, over and over again. I tried to do something-- to fight, to escape-- but I couldn’t; this woman, this human woman, had grappled onto me and knocked me onto the floor. I tried to move my shadow, but the blows were too powerful; it withered, and died.
***
Finally, it was over. The woman rose, her fists bloodied, her knuckles broken. Her companions looked at her in awe. My crippled form lay on the floor, exposed fully to the torchlight, a small, flaky, bloody husk, an insignificant fraction of what it was before.
She was sweating and breathing heavily. She hosted my corporeal shell, with great effort, though this was due to her exhaustion, not any particular resistance on my part, and carried me to the altar. She set me down there, on the piece of rock that had served as many innocents’ death bed, and stood for a moment, resting.
'Who--' I started. It hurt to talk, and my voice came out as a raspy wheeze. I tried again, but with much the same result. 'Who... are you?'
'That’s not important.' She said.
'But--' I wanted to ask so many questions. The impossible had just happened. Surely I deserved...
I didn’t deserve anything. Not answers, not pity, nothing. I was a skinned sow taking its final breaths. I was weak, broken, and practically dead. Nobody owed me anything.
Out of this revelation, true enlightenment bubbled to the surface. I felt the need to share it. With a herculean effort, I grabbed the woman’s arm in a soft and trembling grip. I looked into her eyes, her soft brown eyes, and said 'I... don’t want... to die.'
She looked back at me. 'I know,' she said. She knew. She picked up the jade knife from beside the altar. She looked at it, then met my gaze again. The woman was no longer enraged, or angry, or sad; she wore a look of justice and compassion.
'Neither did anyone else,' she said, driving the knife into me.
And shadow consumed me.`,
  doors: [["",""]],
  nooks: [["",""]],
  slots: [["","",""]],
  items: [""],
  commentary: "You access The Final Dream by lying down on the slab in the tomb of the dead god."
};

go("The Truck");