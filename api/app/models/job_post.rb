class JobPost < ApplicationRecord
    validates :title, presence: true
    validates :category, presence: true
    validates :headquarters, presence: true
    validates :job_description, presence: true
    validates :how_to_apply, presence: true
    validates :company_name, presence: true
    validates :company_website, presence: true
    validates :company_statement, presence: true
    validates :logo, presence: true
    validates :company_email, presence: true
    validates :company_info, presence: true
end
