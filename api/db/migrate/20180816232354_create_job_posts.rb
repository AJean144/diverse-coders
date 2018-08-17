class CreateJobPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :job_posts do |t|
      t.string :title
      t.string :category
      t.string :headquarters
      t.string :region
      t.string :job_description
      t.string :how_to_apply
      t.string :company_name
      t.string :company_statement
      t.string :logo
      t.string :company_website
      t.string :company_email
      t.text :company_info

      t.timestamps
    end
  end
end
