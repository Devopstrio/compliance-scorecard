import pandas as pd
import numpy as np

class ScoringEngine:
    def __init__(self):
        # Weighting factors by domain
        self.weights = {
            "Identity": 0.30,
            "Network": 0.20,
            "Data": 0.25,
            "Logging": 0.15,
            "Configuration": 0.10
        }

    def calculate_weighted_score(self, domain_scores: dict):
        """
        Calculates a global score based on domain-specific weights.
        """
        total_score = 0
        for domain, score in domain_scores.items():
            weight = self.weights.get(domain, 0.10)
            total_score += (score * weight)
        return round(total_score, 2)

    def calculate_bu_aggregation(self, team_results_df: pd.DataFrame):
        """
        Aggregates individual team scores into a Business Unit roll-up.
        """
        bu_summary = team_results_df.groupby('business_unit')['score'].mean()
        return bu_summary.to_dict()

    def identify_remediation_priority(self, findings_df: pd.DataFrame):
        """
        Ranks findings based on score impact and business criticality.
        """
        findings_df['priority_score'] = findings_df['impact'] * findings_df['criticality_multiplier']
        return findings_df.sort_values(by='priority_score', ascending=False)

if __name__ == "__main__":
    engine = ScoringEngine()
    
    # Weighted Score Test
    scores = {"Identity": 90, "Network": 70, "Data": 85, "Logging": 60, "Configuration": 95}
    global_score = engine.calculate_weighted_score(scores)
    print(f"Global Compliance Score: {global_score}%")
    
    # BU Aggregation Test
    data = {
        'team': ['Alpha', 'Beta', 'Gamma', 'Delta'],
        'business_unit': ['Finance', 'Finance', 'Engineering', 'Engineering'],
        'score': [88, 92, 65, 71]
    }
    df = pd.DataFrame(data)
    bu_scores = engine.calculate_bu_aggregation(df)
    print(f"Business Unit Scores: {bu_scores}")
