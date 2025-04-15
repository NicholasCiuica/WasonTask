const optionText = {
  options: [

    {
      ruleName: "Wason's Original Rule",
      ruleDefinition: `\"If there is a D on one side of any card, then there is a 3 on its other side.\"`,
      infoText: `The Wason Selection Task (WST) is a type of selection task in which participants are shown four cards and asked to select which cards must be flipped to test the validity of a proposed rule. This rule is in the form of a conditional proposition expressed as “if P, then Q,” and each of the four revealed faces of the cards shows information aligning with P, Q, not-P, and not-Q (Nakamura, n.d.). The original WST was performed using the four cards shown above with the following front and (back) faces: D(3) 3(K) B(5) 7(D) (Wason, 1968). The task was constructed to test participants on conditional logic and falsification thinking. Participants must pick the cards whose faces align with the conditional propositions Modus Ponens (D implies 3) or Modus Tollens (not-3 implies not-D), as these are the only valid forms of conditional reasoning which could reveal cards that falsify the rule (Zhang et al., 2021). A majority of participants do not make the correct selection in this task, and further studies have varied the content of this task’s cards and rules to try to explain why people so often make mistakes in falsification thinking (Ragni, n.d.).`,
      sources: [
        `Nakamura, K. (n.d.). Similarities and Individual Differences in the Wason Selection Task: An Item Response Theory Analysis. https://escholarship.org/content/qt2704w91r/qt2704w91r_noSplash_9cd50904d4bac8f5741ba3969cbd84b1.pdf?t=op2jme`,
        `Ragni, M. (n.d.). The Wason Selection Task: A Meta-Analysis. https://escholarship.org/content/qt3rv0k45d/qt3rv0k45d_noSplash_8646c09c2d9744d4cabdbda295edd889.pdf?t=sgiit1`,
        `Wason, P. C. (1968). Reasoning about a Rule. Quarterly Journal of Experimental Psychology, 20(3), 273–281. https://doi.org/10.1080/14640746808400161`,
        `Zhang, M., Wang, L., Zou, F., Wang, Y., & Wu, X. (2021). The Brain Structure and Intrinsic Characters of Falsification Thinking in Conditional Proposition Testing. Frontiers in Human Neuroscience, 15, 684470. https://doi.org/10.3389/fnhum.2021.684470`
      ]
    },

    {
      ruleName: "Abstract Rule",
      ruleDefinition: `\"If there is a vowel on one side of a card, then there is an even number on the other side.\"`,
      infoText: `Abstract variations of the Wason Selection Task (WST) are those that do not have cards or rules which participants may have had previous associations or everyday experiences with (Ragni, n.d.). This includes Wason’s original task and variations like the one above, which is a generalization of the original WST to emphasize the abstract nature of the task’s content. Participants consistently make mistakes in abstract WST, with multiple studies reporting less than 10% of participants choosing the correct pair of cards (Zhang et al., 2021), and a meta-analysis reporting that only 19% of participants make the correct selection in abstract WST studies (Ragni, n.d.).`,
      sources: [
        `Ragni, M. (n.d.). The Wason Selection Task: A Meta-Analysis. https://escholarship.org/content/qt3rv0k45d/qt3rv0k45d_noSplash_8646c09c2d9744d4cabdbda295edd889.pdf?t=sgiit1`,
        `Ragni, M., Kola, I., & Johnson-Laird, P. N. (2018). On selecting evidence to test hypotheses: A theory of selection tasks. Psychological Bulletin, 144(8), 779–796. https://www.modeltheory.org/papers/2018selection.pdf`,
        `Zhang, M., Wang, L., Zou, F., Wang, Y., & Wu, X. (2021). The Brain Structure and Intrinsic Characters of Falsification Thinking in Conditional Proposition Testing. Frontiers in Human Neuroscience, 15, 684470. https://doi.org/10.3389/fnhum.2021.684470`
      ]
    },

    {
      ruleName: "Griggs and Cox's Transit Rule",
      ruleDefinition: `\"Every time I go to Miami I travel by car.\"`,
      infoText: `Griggs and Cox created a transit task (1982) to test whether “thematic” materials, or familiar contents, would affect performance on the Wason Selection Task (WST). They tested undergraduates from the University of Florida using cards with revealed faces labeled “Miami”, “Atlanta”, “plane”, and “car” and a rule randomly generated for each participant in the format displayed above: “Every time I go to (Miami, Atlanta) I travel by (plane, car).” The everyday contents of this task did not result in significant improvement among participant responses, but participants generally perform better with everyday tasks than abstract ones, selecting the correct pair of cards 29% of the time (Ragni, n.d.). This implies that participant’s previous knowledge and experiences may assist them in engaging in falsification thinking, depending on the specific contents.`,
      sources: [
        `Griggs, R. A., & Cox, J. R. (1982). The elusive thematic-materials effect in Wason’s selection task. British Journal of Psychology, 73, 407-420. http://cogsci.bme.hu/~ktkuser/KURZUSOK/BMETE47MN05/2017_2018_2/Griggs_Cox_1982_The-elusive-thematic-materials-effect-in-Wasons-selection-task.pdf`,
        `Ragni, M. (n.d.). The Wason Selection Task: A Meta-Analysis. https://escholarship.org/content/qt3rv0k45d/qt3rv0k45d_noSplash_8646c09c2d9744d4cabdbda295edd889.pdf?t=sgiit1`
      ]
    },

    {
      ruleName: "Griggs and Cox's Beer Rule",
      ruleDefinition: `\"If a person is drinking beer, they must be [21] or older.\"`,
      infoText: `The “beer” task shown above is an example of a “deontic” task because its contents are related to social/ethical rules (the legal drinking age in the US at the time of the experiment was 19, but I changed it above to reflect modern laws). Griggs and Cox designed this task (1982) and found that participants performed significantly better on this task than their abstract control task or their previous everyday task. Indeed, participants of deontic tasks make the correct selection 69% of the time (Ragni, n.d.). This result and other research suggests that human brains may have evolved a cheater-detection mechanism that allows for increased performance in social “detective” roles (Van Lier et al., 2013). While the brain uses heuristics and biases to simplify abstract and everyday tasks, it may have evolved this innate cheater-detection to find unfairness or rule-breaking in social situations because cooperation is necessary for group survival.`,
      sources: [
        `Griggs, R. A., & Cox, J. R. (1982). The elusive thematic-materials effect in Wason’s selection task. British Journal of Psychology, 73, 407-420. http://cogsci.bme.hu/~ktkuser/KURZUSOK/BMETE47MN05/2017_2018_2/Griggs_Cox_1982_The-elusive-thematic-materials-effect-in-Wasons-selection-task.pdf`,
        `Ragni, M. (n.d.). The Wason Selection Task: A Meta-Analysis. https://escholarship.org/content/qt3rv0k45d/qt3rv0k45d_noSplash_8646c09c2d9744d4cabdbda295edd889.pdf?t=sgiit1`,
        `Van Lier, J., Revlin, R., & De Neys, W. (2013). Detecting Cheaters without Thinking: Testing the Automaticity of the Cheater Detection Module. PLoS ONE, 8(1), e53827. https://doi.org/10.1371/journal.pone.0053827`
      ]
    } 
    
  ]
}